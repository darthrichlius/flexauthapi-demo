import Image from "next/image";
import { Button } from "@/core/presentation/components/ui/button";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div>
          <h1 className="text-6xl font-bold">flexauthapi-demo</h1>
          <p>The official website showcasing FlexAuthAPI integration.</p>
        </div>
        <div>
          <p>
            Discover inspiration on how to leverage the powerful authentication
            and authorization features offered by FlexAuthAPI.
          </p>
        </div>
        <div className="w-full max-w-sm md:max-w-3xl">
          <h2>What is FlexAuthAPI?</h2>
          <p>
            FlexAuthAPI is an open-source application accessible via an API.
          </p>
          <p>
            It offers developers a self-hosted, user-friendly solution to
            integrate a robust profile and security layer into their distributed
            systems.
          </p>
        </div>
        <div>
          <h2>Mission</h2>
          <p>
            FlexAuthAPI is designed to prioritize <strong>privacy</strong> and{" "}
            <strong>control</strong> while delivering a{" "}
            <strong>generous</strong> set of features.
          </p>
          <p>
            It&apos;s an ideal solution for developers seeking a free
            alternative to paid or SaaS-based options, or for anyone eager to
            deepen their knowledge in authentication and security.
          </p>
        </div>
        <div>
          <h2>Key advantages</h2>

          <ul>
            <li>
              <strong>Control & customization</strong>: Free, open-source, and
              adaptable to your unique use case.
            </li>
            <li>
              <strong>Comprehensive</strong>: Supports a variety of
              authentication scenarios.
            </li>
            <li>
              <strong>Privacy</strong>:Maintain full ownership and control over
              your data.
            </li>
            <li>
              <strong>Secure</strong>: Adheres to modern security standards.
            </li>
            <li>
              <strong>Future-proof</strong>: Equipped with cutting-edge
              authentication features like JWT and passwordless login.
            </li>
          </ul>
        </div>
        <div>
          <h2>How to use</h2>
          <div>
            <h3>1. User Management</h3>
            <p>Begin by creating a user account.</p>
            <Button type="submit" className="w-full">
              <a className="w-full" href="/register">
                Create an account
              </a>
            </Button>
          </div>
          <div>
            <h3>2. Credentials-Based Authentication</h3>
            <p>Sign in using your account credentials.</p>
            <Button asChild className="w-full">
              <a className="w-full" href="/login">
                Log in with your password
              </a>
            </Button>
          </div>
          <div>
            <h3>3. Multi-Factor Authentication (MFA) Management </h3>
            <p>
              Enhance security by enabling and configuring two-factor
              authentication (2FA) through an authenticator app.
            </p>
            <Button asChild className="w-full">
              <a className="w-full" href="/admin/mfa">
                Enable or disable MFA
              </a>
            </Button>
          </div>
          <div>
            <h3>4. 2FA Authentication</h3>
            <p>
              Log in with your credentials, then verify your identity using a
              Time-Based One-Time Password (TOTP) or a backup code.
            </p>
            <Button asChild className="w-full">
              <a className="w-full" href="/login-mfa">
                Login with 2FA
              </a>
            </Button>
          </div>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
