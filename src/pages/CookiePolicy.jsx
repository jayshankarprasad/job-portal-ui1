import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const cookieTypes = [
  {
    name: 'Essential Cookies',
    description: 'Required for core features like signing in and maintaining your session. These cannot be disabled.',
    color: 'primary',
  },
  {
    name: 'Preference Cookies',
    description: 'Remember your settings, such as dark/light theme and saved job filters.',
    color: 'purple',
  },
  {
    name: 'Analytics Cookies',
    description: 'Help us understand how the site is used so we can improve the experience.',
    color: 'blue',
  },
  {
    name: 'Marketing Cookies',
    description: 'Not currently used on JobPortal. We may introduce these in the future with your consent.',
    color: 'gray',
  },
];

const colorClasses = {
  primary: 'bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400',
  purple: 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400',
  blue: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400',
  gray: 'bg-gray-100 dark:bg-gray-700/50 text-gray-600 dark:text-gray-400',
};

const CookiePolicy = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-[calc(100vh-5rem)] bg-gradient-to-br from-gray-50 via-white to-primary-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-12 relative transition-colors duration-300">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-primary-200/30 to-purple-200/30 dark:from-primary-600/10 dark:to-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-tl from-blue-200/30 to-purple-200/30 dark:from-blue-600/10 dark:to-purple-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-black bg-gradient-to-r from-primary-600 via-purple-600 to-primary-800 bg-clip-text text-transparent mb-2">
            Cookie Policy
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            How JobPortal uses cookies to improve your experience.
          </p>
        </div>

        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 dark:border-gray-700/20 p-8 transition-colors duration-300 space-y-8">
          <p className="text-sm text-gray-500 dark:text-gray-400">Last updated: November 2026</p>

          <section className="space-y-2">
            <h2 className="font-semibold text-lg text-gray-900 dark:text-white">What Are Cookies?</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Cookies are small text files stored on your device when you visit JobPortal. They help the
              site remember who you are and how you like to use it between visits.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-semibold text-lg text-gray-900 dark:text-white">How We Use Cookies</h2>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
              <li>Keeping you signed in to your account</li>
              <li>Remembering your theme preference (light/dark mode)</li>
              <li>Understanding how visitors use the site</li>
              <li>Improving job recommendations shown to you</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="font-semibold text-lg text-gray-900 dark:text-white">Types of Cookies We Use</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {cookieTypes.map((type) => (
                <div
                  key={type.name}
                  className="p-4 rounded-xl border border-gray-200 dark:border-gray-700"
                >
                  <div className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold mb-2 ${colorClasses[type.color]}`}>
                    {type.name}
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{type.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-2">
            <h2 className="font-semibold text-lg text-gray-900 dark:text-white">Managing Cookies</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Most browsers let you control or disable cookies through their settings. Keep in mind that
              disabling essential cookies may prevent features like signing in from working correctly.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-semibold text-lg text-gray-900 dark:text-white">Changes to This Policy</h2>
            <p className="text-gray-700 dark:text-gray-300">
              We may update this Cookie Policy from time to time. Any changes will be posted on this page.
            </p>
          </section>

          <section className="pt-6 border-t border-gray-200 dark:border-gray-700 space-y-4">
            <p className="text-gray-700 dark:text-gray-300">
              Questions about cookies? Reach out via our{' '}
              <Link to="/contact" className="text-primary-600 dark:text-primary-400 font-semibold hover:underline">
                Contact page
              </Link>
              .
            </p>
            <button
              type="button"
              onClick={() => navigate('/')}
              className="px-8 py-4 border-2 border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-xl font-semibold hover:border-gray-300 dark:hover:border-gray-500 transition-colors"
            >
              Back to Home
            </button>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;
