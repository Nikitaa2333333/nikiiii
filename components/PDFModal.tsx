import React, { useEffect } from 'react';
import { X, FileText, Download, ExternalLink } from 'lucide-react';
import { useModal } from '../context/ModalContext';

const PDFModal: React.FC = () => {
    const { activeModal, closeModal, pdfUrl } = useModal();

    useEffect(() => {
        if (activeModal === 'pdf') {
            // Automatically try to open in new tab as requested
            const timer = setTimeout(() => {
                window.open(pdfUrl, '_blank');
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, [activeModal, pdfUrl]);

    if (activeModal !== 'pdf') return null;

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = 'brochure.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                onClick={closeModal}
                className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
            />

            {/* Modal Container */}
            <div
                className="relative w-full max-w-md bg-white border border-gray-200 rounded-3xl shadow-2xl p-8 overflow-hidden z-10 animate-in fade-in zoom-in duration-300"
            >
                {/* Close Button */}
                <button
                    onClick={closeModal}
                    className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
                >
                    <X className="w-5 h-5 text-gray-500" />
                </button>

                <div className="flex flex-col items-center text-center space-y-6">
                    {/* Icon Area */}
                    <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center text-blue-600">
                        <FileText className="w-10 h-10" />
                    </div>

                    <div className="space-y-2">
                        <h3 className="text-2xl font-bold text-gray-900">Брошюра открывается</h3>
                        <p className="text-gray-500 leading-relaxed text-sm">
                            Вы перейдете на новую вкладку, где откроется брошюра.
                            Если она не открылась автоматически, воспользуйтесь кнопками ниже.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full pt-2">
                        <button
                            onClick={() => window.open(pdfUrl, '_blank')}
                            className="flex items-center justify-center gap-2 bg-gray-900 text-white font-bold py-4 px-6 rounded-2xl hover:bg-gray-800 transition-all active:scale-95 shadow-lg"
                        >
                            <ExternalLink className="w-4 h-4" />
                            <span>Открыть</span>
                        </button>

                        <button
                            onClick={handleDownload}
                            className="flex items-center justify-center gap-2 bg-white text-gray-900 border border-gray-200 font-bold py-4 px-6 rounded-2xl hover:bg-gray-50 transition-all active:scale-95 shadow-sm"
                        >
                            <Download className="w-4 h-4" />
                            <span>Скачать</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PDFModal;
