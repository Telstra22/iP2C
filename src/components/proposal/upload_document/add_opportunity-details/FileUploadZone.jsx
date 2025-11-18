import React, { useRef, useState, forwardRef, useImperativeHandle } from "react";
import { FileUp, X } from "lucide-react";

const FileUploadZone = forwardRef(({ maxFiles = 5, maxSizeMB = 10, onFilesChange, showUploadGuidelines = false, guidelinesText }, ref) => {
  const fileInputRef = useRef(null);
  const [files, setFiles] = useState([]); // [{ file, name, size, progress (0-100) }]
  const timersRef = useRef(new Map()); // key => interval id

  const makeKey = (name, size) => `${name}::${size}`;

  const isAllowedType = (file) => /\.(pdf|doc|docx|xls|xlsx|csv)$/i.test(file.name);

  const addFiles = (incoming) => {
    const current = files;
    const merged = [...current];
    const maxBytes = maxSizeMB * 1024 * 1024;
    let currentBytes = merged.reduce((acc, it) => acc + it.size, 0);
    for (const f of Array.from(incoming)) {
      if (!isAllowedType(f)) continue;
      if (merged.length >= maxFiles) break;
      if (merged.find((x) => x.name === f.name && x.size === f.size)) continue;
      if (currentBytes + f.size > maxBytes) continue;
      // push as uploading with progress 0
      const item = { file: f, name: f.name, size: f.size, progress: 0 };
      merged.push(item);
      currentBytes += f.size;
      // simulate upload progress
      simulateUpload(item);
    }
    setFiles(merged);
    onFilesChange && onFilesChange(merged);
  };

  useImperativeHandle(ref, () => ({
    addFiles: (filesLike) => addFiles(filesLike),
  }));

  const simulateUpload = (item) => {
    let progress = 0;
    const stepMs = 80 + Math.random() * 70; // 80-150ms per tick
    const inc = 8 + Math.random() * 12; // 8-20% per tick
    const timer = setInterval(() => {
      progress = Math.min(100, progress + inc);
      setFiles((prev) =>
        prev.map((it) =>
          it.name === item.name && it.size === item.size
            ? { ...it, progress }
            : it
        )
      );
      if (progress >= 100) {
        clearInterval(timer);
        timersRef.current.delete(makeKey(item.name, item.size));
      }
    }, stepMs);
    timersRef.current.set(makeKey(item.name, item.size), timer);
  };

  const removeFile = (target) => {
    const key = makeKey(target.name, target.size);
    const t = timersRef.current.get(key);
    if (t) {
      clearInterval(t);
      timersRef.current.delete(key);
    }
    setFiles((prev) => {
      const next = prev.filter((it) => !(it.name === target.name && it.size === target.size));
      onFilesChange && onFilesChange(next);
      return next;
    });
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    if (e.dataTransfer?.files?.length) {
      addFiles(e.dataTransfer.files);
    }
  };

  const handleFileChange = (e) => {
    if (e.target?.files?.length) {
      addFiles(e.target.files);
      e.target.value = "";
    }
  };

  return (
    <div className="flex flex-col gap-[15px]">
      <div
        className="self-stretch h-[204px] px-[484px] py-[65px] flex flex-col justify-center items-center gap-[19px] rounded-[9px] border border-dashed border-[var(--blacks-40,#ABA0A0)] cursor-pointer"
        onClick={handleClick}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        <div className="w-[40px] h-[50px] rounded-[3.282px] flex items-center justify-center">
          <FileUp width={32} height={42} color="#c6c6c6" strokeWidth={2} />
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-[10px] gap-y-[6px] text-center">
          <div className="inline-flex items-center justify-center gap-[10px] whitespace-nowrap w-[408px] text-center">
            <span className="text-[#050505] font-['Inter',sans-serif] text-[20px] font-normal leading-[26.82px]">
              Drag and Drop file here or
            </span>
            <span className="text-[#0054FF] font-['Inter',sans-serif] text-[20px] font-normal leading-[26.82px] underline cursor-pointer">
              Choose file
            </span>
          </div>
          {showUploadGuidelines ? (
            <span className="text-[var(--blacks-40,#A0A0A0)] font-['Inter',sans-serif] text-[18px] font-normal leading-[134.1%] whitespace-nowrap">
              {guidelinesText ?? 'Select a maximum of 5 files to upload. File format must be .ppt, .doc, .csv or .pdf. Total file size maximum: 10 MB.'}
            </span>
          ) : (
            <span className="text-[var(--blacks-40,#A0A0A0)] font-['Inter',sans-serif] text-[18px] font-normal leading-[134.1%] whitespace-nowrap">
              File name should not contain the following characters: " # % & * : &lt; &gt; ? \\ / &#123; &#125; ~ |
            </span>
          )}
        </div>
        <input
          ref={fileInputRef}
          type="file"
          className="hidden"
          onChange={handleFileChange}
          accept=".doc,.docx,.xls,.xlsx,.pdf,.csv,.ppt,.pptx"
          multiple
        />
      </div>
      {files.length > 0 && (
        <div className="flex flex-col gap-[8px]">
          {files.map((f, idx) => (
            <div key={`${f.name}-${f.size}-${idx}`} className="flex flex-col gap-[6px] px-[12px] py-[10px] bg-[#F9F9F9] rounded-[6px] border border-[#EDEDED]">
              <div className="flex items-center justify-between gap-[10px]">
                <div className="flex items-center gap-[12px] min-w-0 flex-1">
                  <span className="text-[#050505] font-['Inter',sans-serif] text-[18px] font-normal leading-[24px] break-all">
                    {f.name}
                  </span>
                </div>
                <span className="text-[#828282] font-['Inter',sans-serif] text-[16px] font-normal leading-[22px]">
                  {(f.size / (1024 * 1024)).toFixed(2)} MB
                </span>
                <button
                  type="button"
                  onClick={() => removeFile(f)}
                  className="ml-[8px] p-[6px] rounded-[6px] hover:bg-[#ECECEC] active:scale-[0.98]"
                  aria-label={`Remove ${f.name}`}
                >
                  <X size={16} color="#505050" />
                </button>
              </div>
              {f.progress < 100 ? (
                <div className="w-full h-[8px] bg-[#EDEDED] rounded-[999px] overflow-hidden">
                  <div
                    className="h-full bg-[#0D54FF] transition-[width] duration-150"
                    style={{ width: `${f.progress}%` }}
                  />
                </div>
              ) : (
                <div className="text-[#56A72B] font-['Inter',sans-serif] text-[14px] leading-[20px]">Uploaded</div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
});

export default FileUploadZone;
