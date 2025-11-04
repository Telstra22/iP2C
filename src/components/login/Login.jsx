import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff, Check,ChevronDown } from "lucide-react";
import {
  LABEL_CLASS,
  INPUT_EMAIL_CLASS,
  INPUT_PASSWORD_CLASS,
  TOGGLE_ICON_BTN_CLASS,
  getCheckboxBoxClass,
} from "./styles/loginFormClasses";
// Profile selection will use a native <select> instead of RadioButton




function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [profileType, setProfileType] = useState("Proposal Generation");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const isValidCredentials = (email, password) =>
    email?.toLowerCase() === "alex.anderson@telstra.com" && password === "12345";

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const email = data.get("email")?.trim();
    const password = data.get("password") ?? "";

    if (isValidCredentials(email, password)) {
      setError(null);
      navigate("/manage_proposals");
    } else {
      setError("Invalid email or password");
    }
  };

  const emailErrorId = "email-error";
  const passwordErrorId = "password-error";

  return (
    <>
      <div className="h-full overflow-hidden font-['Inter',sans-serif] flex flex-col lg:flex-row bg-[#FEF9EF]">
        {/* Left: Login form */}
        <div className="flex-1 flex items-center justify-center px-5 md:px-8 lg:px-12 xl:px-16 2xl:px-[195px] overflow-hidden">
          <div className="w-full max-w-[600px]">
            <h1 className="text-[#505050] font-['Inter',sans-serif] text-[40px] font-medium leading-[51px] mb-[30px]">
              Welcome Back!
            </h1>

            {/* Sales Operation */}
            <div className="flex flex-col gap-[9px] mb-[29px]">
                <label className={LABEL_CLASS}>
                  Sales Operation<span className="text-[#FF0000]">*</span>
                </label>
              <div className="flex items-center gap-[25px] relative">
                <select
                  name="profileType"
                  aria-label="Profile"
                  value={profileType}
                  onChange={(e) => setProfileType(e.target.value)}
                  className={`${INPUT_EMAIL_CLASS} pr-[60px] appearance-none`}
                >
                  <option value="Proposal Generation">Proposal Generation</option>
                  <option value="Contract Review">Contract Review</option>
                </select>
                {/* Custom dropdown arrow (24x24) positioned to the right */}
                <ChevronDown
                  size={24}
                  color="#505050"
                  className="pointer-events-none absolute right-[18px] top-1/2 -translate-y-1/2 w-[24px] h-[24px] aspect-[1/1]"
                />
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-0" noValidate>
              {error && (
                <p
                  className="text-red-600 text-sm mb-4"
                  role="alert"
                  id={emailErrorId}
                >
                  {error}{" "}
                </p>
              )}

              {/* Email Field */}
              <div className="mb-[29px]">
                <label htmlFor="email" className={LABEL_CLASS}>
                  Email<span className="text-[#FF0000]">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="alex.anderson@telstra.com"
                  aria-invalid={Boolean(error) || undefined}
                  aria-describedby={error ? emailErrorId : undefined}
                  className={INPUT_EMAIL_CLASS}
                />
              </div>

              {/* Password Field */}
              <div className="mb-[30px]">
                <label htmlFor="password" className={LABEL_CLASS}>
                  Password<span className="text-[#FF0000]">*</span>
                </label>
                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    required
                    autoComplete="current-password"
                    placeholder="**************"
                    aria-invalid={Boolean(error) || undefined}
                    aria-describedby={error ? passwordErrorId : undefined}
                    className={INPUT_PASSWORD_CLASS}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((s) => !s)}
                    className={TOGGLE_ICON_BTN_CLASS}
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                    aria-pressed={showPassword}
                  >
                    {showPassword ? (
                      <Eye size={22} color="#0D54FF" />
                    ) : (
                      <EyeOff size={22} color="#505050" />
                    )}{" "}
                  </button>
                </div>
                {error && (
                  <span id={passwordErrorId} className="sr-only">
                    {error}{" "}
                  </span>
                )}{" "}
              </div>

              {/* Remember me & Forgot password */}
              <div className="flex items-center justify-between mb-[30px]">
                <button
                  type="button"
                  onClick={() => setRememberMe(!rememberMe)}
                  className="flex items-center gap-[7px] cursor-pointer"
                  aria-pressed={rememberMe}
                  aria-label="Remember me"
                >
                  <div className={getCheckboxBoxClass(rememberMe)}>
                    {rememberMe && <Check size={18} color="#FFFFFF" />}
                  </div>
                  <span className="text-[#828282] font-['Inter',sans-serif] text-[20px] font-normal leading-[27px]">
                    Remember me
                  </span>
                </button>
                <a
                  href="#"
                  className="text-[#0D54FF] font-['Inter',sans-serif] text-[20px] font-normal leading-[27px] hover:underline"
                >
                  Forgot password?
                </a>
              </div>

              {/* Sign In Button */}
              <button
                type="submit"
                className="w-full h-[66px] rounded-[8px] bg-[#0D54FF] flex items-center justify-center text-white font-['Inter',sans-serif] text-[24px] font-semibold leading-[32px] hover:bg-[#0D54FF]/90 transition-colors mb-[58px]"
              >
                Sign In
              </button>
            </form>

            {/* OR Divider */}
            <div className="flex items-center gap-[16px] mb-[37px]">
              <div className="flex-1 border-t border-[#B4B4B4]" />
              <span className="text-[#828282] font-['Inter',sans-serif] text-[20px] font-normal leading-[27px]">
                OR
              </span>
              <div className="flex-1 border-t border-[#B4B4B4]" />
            </div>

            {/* Create Account */}
            <div className="flex items-center justify-center gap-[8px]">
              <span className="text-[#828282] font-['Inter',sans-serif] text-[20px] font-normal leading-[27px]">
                Don't have an account ?
              </span>
              <a
                href="#"
                className="text-[#0D54FF] font-['Inter',sans-serif] text-[20px] font-normal leading-[27px] hover:underline"
              >
                Create Account 
              </a>
            </div>
          </div>
        </div>

        {/* Right: Brand / Info */}
        <div className="hidden lg:flex flex-1 relative overflow-hidden h-full flex-col justify-between pl-[60px] xl:pl-[100px] 2xl:pl-[125px] pr-0 pt-[12vh] xl:pt-[15vh] 2xl:pt-[245px] pb-[8vh] xl:pb-[10vh] 2xl:pb-[100px]">
          <div className="relative z-10 w-full max-w-[710px] flex-shrink-0 pr-[80px] xl:pr-[120px] 2xl:pr-[85px]">
            <h1 className="text-[#505050] font-['Inter',sans-serif] text-[45.15px] font-medium leading-[60.55px] mb-[52px]">
              <span className="text-[#0D54FF]">AI- Powered</span> Proposal &
              <br />
              Contract Builder
            </h1>
            <p className="text-[#505050] font-['Inter',sans-serif] text-[24px] font-normal leading-[32.18px]">
              Intelligent Proposal to Contract system that connects
              GenAI-powered proposal generation with automated contract
              lifecycle management
            </p>
          </div>
          <div className="absolute right-0 bottom-0 z-0 pointer-events-none select-none">
            <img
              src="/login-illustration.svg"
              alt="AI-Powered Proposal & Contract Builder"
              className="w-[929px] h-auto object-contain object-right-bottom"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
