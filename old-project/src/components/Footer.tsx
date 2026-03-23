import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-3">מכירת חמץ אונליין</h3>
            <p className="text-gray-300">
              המערכת המתקדמת ביותר למכירת חמץ באופן מקוון. פשוט, קל ומהיר.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-3">קישורים מהירים</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white">
                  דף הבית
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white">
                  אודות
                </Link>
              </li>
              <li>
                <Link href="/form" className="text-gray-300 hover:text-white">
                  טופס מכירה
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-3">יצירת קשר</h3>
            <p className="text-gray-300">
              לשאלות ובירורים נוספים:
              <br />
              <a href="mailto:contact@hametz-sale.com" className="hover:text-white">
                contact@hametz-sale.com
              </a>
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>© {currentYear} מכירת חמץ אונליין. כל הזכויות שמורות.</p>
        </div>
      </div>
    </footer>
  );
} 