import Image from 'next/image';
import Link from 'next/link';

export default function PageHeader({ title, subtitle, breadcrumbs = [] }) {
    return (
        <section className="relative bg-gray-900">
            {/* Breadcrumbs */}
            {breadcrumbs.length > 0 && (
                <div className="bg-white/10 backdrop-blur-sm">
                    <div className="container mx-auto px-4">
                        <nav className="py-3">
                            <ol className="flex items-center space-x-2 text-sm">
                                <li>
                                    <Link href="/" className="text-white/80 hover:text-white transition-colors">
                                        Home
                                    </Link>
                                </li>
                                {breadcrumbs.map((item, index) => (
                                    <li key={index} className="flex items-center space-x-2">
                                        <span className="text-white/40">/</span>
                                        {index === breadcrumbs.length - 1 ? (
                                            <span className="text-white font-medium">{item.name}</span>
                                        ) : (
                                            <Link
                                                href={item.path}
                                                className="text-white/80 hover:text-white transition-colors"
                                            >
                                                {item.name}
                                            </Link>
                                        )}
                                    </li>
                                ))}
                            </ol>
                        </nav>
                    </div>
                </div>
            )}

            {/* Banner */}
            <div className="relative h-96">
                <Image
                    src="/banner/common-banner.jpg"
                    alt={title}
                    fill
                    className="object-cover opacity-60"
                />
                <div className="relative z-10 h-full flex items-center justify-center text-center text-white">
                    <div className="max-w-4xl mx-auto px-4">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
                        {subtitle && <p className="text-xl">{subtitle}</p>}
                    </div>
                </div>
            </div>
        </section>
    );
}