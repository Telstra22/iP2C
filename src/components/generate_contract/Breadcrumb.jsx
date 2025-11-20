import React from 'react';
import { ChevronRight } from 'lucide-react';

function Breadcrumb() {
  return (
    <div className="flex items-center gap-2 px-[66px] pt-4 pb-3">
      <span className="breadcrumb-text">Login</span>
      <ChevronRight width={11} height={18} className="text-(--color-breadcrumb-separator)" />
      <span className="breadcrumb-active">Contract Review</span>
    </div>
  );
}

export default Breadcrumb;