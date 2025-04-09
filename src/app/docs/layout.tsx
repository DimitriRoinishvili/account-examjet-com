import DocsLeftMenu from '@/components/Docs/DocsLeftMenu';

export default function DocsLayout({children}: { children: React.ReactNode }) {
    return (
        <div className="pt-16 md:pt-20 lg:pt-28">
            <div className="container mx-auto">
                <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
                    <div className="flex flex-col md:flex-row">
                        <aside className="flex-shrink-0 w-full md:w-[300px] mb-4 md:mb-0">
                            {/* Mobile menu toggle using a hidden checkbox */}
                            <input id="menu-toggle" type="checkbox" className="hidden peer"/>
                            <label htmlFor="menu-toggle"
                                   className="block md:hidden bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md cursor-pointer mt-4 mb-4 shadow-md transition duration-200">
                                <div className="inline-flex items-center">
                                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                              d="M4 6h16M4 12h16M4 18h16"/>
                                    </svg>
                                    Menu
                                </div>
                            </label>
                            {/*
                The menu container:
                - Hidden by default on mobile (hidden)
                - When the peer (checkbox) is checked, show the menu (peer-checked:block)
                - Always visible on md and up (md:block)
                - Sticky positioning applied
              */}
                            <div className="peer-checked:block hidden md:block sticky top-20">
                                <DocsLeftMenu/>
                            </div>
                        </aside>

                        <main className="flex-1 p-4">{children}</main>
                    </div>
                </div>
            </div>
        </div>
    );
}
