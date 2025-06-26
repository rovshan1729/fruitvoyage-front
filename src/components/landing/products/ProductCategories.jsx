import { useEffect, useState } from "react";
import { FiMenu } from 'react-icons/fi';

const ProductCategories = ({ data, setSelectCategory, selectCategory }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const linkClass = (key) =>
        `px-4 py-2 rounded-full border transition-all duration-300 ease-in-out ${selectCategory === key
            ? 'text-red-500 border-red-500 bg-red-50'
            : 'text-gray-500 border-transparent hover:text-red-500 hover:border hover:bg-red-50'
        }`;
    return (
        <div>
            <div className='relative flex items-center justify-center py-8 xl:justify-between'>
                <ul className='hidden items-center gap-6 text-lg xl:flex'>
                    {
                        data.map((item) => {
                            return (
                                <li key={item.id}>
                                    <button onClick={() => setSelectCategory(item.id)} className={linkClass(item.id)}>
                                        {item.name}
                                    </button>
                                </li>
                            )
                        })
                    }
                </ul>

                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className='absolute right-0 block text-2xl text-gray-700 xl:hidden'
                >
                    <FiMenu />
                </button>
            </div>


            {menuOpen && (
                <div className='mt-4 flex flex-col items-center gap-4 rounded-xl bg-white p-4 shadow-lg xl:hidden'>
                    <button
                        onClick={() => {
                            setSelectedProduct('svejiefrukti');
                            setMenuOpen(false);
                        }}
                        className={linkClass('svejiefrukti')}
                    >
                        Свежие фрукты и овощи
                    </button>
                    <button
                        onClick={() => {
                            setSelectedProduct('suxofrukti');
                            setMenuOpen(false);
                        }}
                        className={linkClass('suxofrukti')}
                    >
                        Сухофрукты
                    </button>
                    <button
                        onClick={() => {
                            setSelectedProduct('nuts');
                            setMenuOpen(false);
                        }}
                        className={linkClass('nuts')}
                    >
                        Nuts
                    </button>
                    <button
                        onClick={() => {
                            setSelectedProduct('fd');
                            setMenuOpen(false);
                        }}
                        className={linkClass('fd')}
                    >
                        FD
                    </button>
                </div>
            )}
        </div>
    )
}

export default ProductCategories;