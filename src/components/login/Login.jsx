import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff, Check,ChevronDown } from "lucide-react";
import RadioButton from "./RadioButton";
import {
  LABEL_CLASS,
  INPUT_EMAIL_CLASS,
  INPUT_PASSWORD_CLASS,
  TOGGLE_ICON_BTN_CLASS,
  getCheckboxBoxClass,
} from "./styles/loginFormClasses";
import telstraLogo from '../../assets/images/telstra-logo.png';
// Profile selection will use a native <select> instead of RadioButton




function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profileType, setProfileType] = useState("Proposal Generation");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const isValidCredentials = (email, password) =>
    email?.toLowerCase() === "alex.anderson@telstra.com" && password === "12345";

  useEffect(() => {
    try {
      const savedRemember = localStorage.getItem("rememberMe");
      const savedEmail = localStorage.getItem("rememberEmail");
      const savedPassword = localStorage.getItem("rememberPassword");
      if (savedRemember === "true" && (savedEmail || savedPassword)) {
        setRememberMe(true);
        setEmail(savedEmail || "");
        setPassword(savedPassword || "");
      }
    } catch {}
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const normalizedEmail = email?.trim();

    // Persist or clear remembered credentials based on checkbox
    try {
      if (rememberMe) {
        localStorage.setItem("rememberMe", "true");
        localStorage.setItem("rememberEmail", normalizedEmail || "");
        localStorage.setItem("rememberPassword", password || "");
      } else {
        localStorage.removeItem("rememberMe");
        localStorage.removeItem("rememberEmail");
        localStorage.removeItem("rememberPassword");
      }
    } catch {}

    if (isValidCredentials(normalizedEmail, password)) {
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
      {/* Header */}
      <header className="w-full h-24 bg-white shadow-[0px_4px_9px_1px_rgba(0,0,0,0.07)] fixed top-0 left-0 right-0 z-50">
        <div className="flex justify-between items-center h-full px-[66px]">
          {/* Left: Logo section */}
          <div className="flex items-center gap-1.5 max-sm:gap-1">
            <div className="text-[#191919] text-[20px] font-medium font-['Graphik'] leading-normal max-sm:text-lg" style={{ fontStyle: 'normal' }}>
                iP2C
              </div>
            <div className="text-black text-xl font-normal max-sm:text-lg">|</div>
            <img
              src={telstraLogo}
              alt="Telstra Logo"
              className="w-[58px] h-[33px] aspect-[58/33] max-sm:w-[45px] max-sm:h-[25px]"
            />
          </div>

          {/* Right: Icons */}
          <div className="flex items-center gap-[33px]">
            <button className="p-1" aria-label="Notifications">
              <img src="/header-icons.svg" alt="" className="w-[175px] h-[58px]" />
            </button>
          </div>
        </div>
      </header>

      <div className="h-screen w-screen overflow-hidden font-['Inter',sans-serif] flex flex-col lg:flex-row bg-[#FEF9EF]">
        {/* Left: Login form */}
        <div className="w-full lg:w-1/2 flex items-start justify-start px-5 md:px-8 lg:px-12 xl:px-16 2xl:pl-[195px] 2xl:pr-[100px] pt-[110px] 2xl:pt-[110px] overflow-y-auto">
          <div className="w-full max-w-[601px]">
            <h1 className="text-[#505050] font-['Inter',sans-serif] text-[40px] font-medium leading-[51px] mb-[30px]">
              Welcome back!
            </h1>

            {/* Sales Function */}
            <div className="flex flex-col gap-[9px] mb-[29px]">
                <label className={LABEL_CLASS}>
                  Sales Function<span className="text-[#FF0000]">*</span>
                </label>
              <div className="flex items-center gap-[25px]" role="radiogroup" aria-label="Sales Function">
                <RadioButton
                  name="sales-function"
                  label="Proposal Generation"
                  checked={profileType === "Proposal Generation"}
                  onChange={() => setProfileType("Proposal Generation")}
                />
                <RadioButton
                  name="sales-function"
                  label="Contract Review"
                  checked={profileType === "Contract Review"}
                  onChange={() => setProfileType("Contract Review")}
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
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
                className="w-full h-[66px] rounded-[8px] bg-[#0D54FF] flex items-center justify-center text-white font-['Inter',sans-serif] text-[22px] font-semibold leading-[30px] hover:bg-[#0D54FF]/90 transition-colors mb-[30px]"
              >
                Sign In
              </button>
            </form>

            {/* Create Account */}
            <div className="flex items-center justify-center gap-[8px] pb-[50px]">
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
        <div className="hidden lg:flex w-1/2 relative overflow-hidden h-full bg-[#FEF9EF]">
          {/* Text content */}
          <div className="absolute left-[60px] xl:left-[100px] 2xl:left-[125px] top-[200px] xl:top-[200px] 2xl:top-[200px] z-10 w-full max-w-[710px]">
            <h1 className="text-[#505050] font-['Inter',sans-serif] text-[45.151px] font-bold leading-[134.1%] mb-[52px]" style={{ fontStyle: 'normal', fontWeight: 700 }}>
              <span className="text-[#0D54FF]">Intelligent</span> Proposal to Contract (iP2C)
            </h1>
            <p className="text-[#505050] font-['Inter',sans-serif] text-[24px] font-normal leading-[134.1%]">
              AI-powered tool for automated proposal generation with automated contract review and negotiation, enabling a seamless transition from opportunity response to contract finalisation
            </p>
          </div>
          
          {/* Illustration */}
          <div className="absolute bottom-0 right-0 pointer-events-none select-none">
            <img
              src="/login-illustration.svg"
              alt="AI-Powered Proposal & Contract Builder"
              className="h-auto object-contain object-right-bottom max-w-full w-[640px] xl:w-[780px] 2xl:w-[929px]"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
