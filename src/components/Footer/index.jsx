import { Link } from 'react-router-dom';
import routes from '@src/router/index.js';
const Footer = () => {
    return (
        <footer className="bg-[rgb(33,103,221)] text-white py-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Thông tin công ty */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Công ty</h3>
                        <ul className="space-y-2">
                            <li><Link to={routes.aboutUs} className="hover:text-teal-400">Về chúng tôi</Link></li>
                            <li><Link to="/careers" className="hover:text-teal-400">Tuyển dụng</Link></li>
                            <li><Link to="/contact" className="hover:text-teal-400">Liên hệ</Link></li>
                        </ul>
                    </div>

                    {/* Dịch vụ */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Dịch vụ</h3>
                        <ul className="space-y-2">
                            <li><Link to="/services" className="hover:text-teal-400">Dịch vụ của chúng tôi</Link></li>
                            <li><Link to="/pricing" className="hover:text-teal-400">Bảng giá</Link></li>
                            <li><Link to="/support" className="hover:text-teal-400">Hỗ trợ</Link></li>
                        </ul>
                    </div>

                    {/* Pháp lý */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Pháp lý</h3>
                        <ul className="space-y-2">
                            <li><Link to="/privacy" className="hover:text-teal-400">Chính sách bảo mật</Link></li>
                            <li><Link to="/terms" className="hover:text-teal-400">Điều khoản sử dụng</Link></li>
                        </ul>
                    </div>

                    {/* Liên hệ */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Kết nối với chúng tôi</h3>
                        <div className="flex space-x-4">
                            <Link to="https://www.facebook.com/" className="hover:text-teal-400">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                                </svg>
                            </Link>
                            <Link to="https://www.instagram.com/" className="hover:text-teal-400">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                                </svg>
                            </Link>
                            <Link to="https://x.com/" className="hover:text-teal-400">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-gray-700 mt-8 pt-8 text-center">
                    <p>&copy; {new Date().getFullYear()} Công ty Cổ phần Dược phẩm Nhân Ái.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;