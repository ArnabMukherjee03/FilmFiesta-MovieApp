

function AutoLayout({children ,className = ""}) {
  return <div className={`w-full max-w-7xl mx-auto px-2 lg:px-[140px]  ${className}`}>{children}</div>;
}


export default AutoLayout;
