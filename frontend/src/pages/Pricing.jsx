import MainNav from "../components/MainNav";

function Pricing() {
    return (
        <>
            <MainNav />
            <section>
                <div className='container my-24 mx-auto md:px-6'>
                    <section className='mb-32'>
                        <div className='background-radial-gradient text-center text-white lg:h-[400px] h-[300px] lg:pt-[80px] pt-[55px]'>
                            <h2 className='mb-12 text-center text-3xl font-bold'>Pricing</h2>
                        </div>

                        <div
                            className='grid px-6 md:px-12 lg:grid-cols-3 xl:px-32'
                            style={{ marginTop: "-200px" }}
                        >
                            {/* Pricing Card 1 */}
                            <div className='p-0 py-12'>
                                <div className='block h-full rounded-xl bg-grey-400 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.1),0_10px_20px_-2px_rgba(0,0,0,0.2)] dark:bg-grey-800 lg:rounded-tr-none lg:rounded-br-none'>
                                    <div className='border-b-2 border-neutral-100 border-opacity-100 p-6 text-center dark:border-opacity-10'>
                                        <p className='mb-4 text-sm uppercase'>
                                            <strong>Basic</strong>
                                        </p>
                                        <h3 className='mb-6 text-3xl'>
                                            <strong>$ 129</strong>
                                            <small className='text-base text-neutral-500 dark:text-neutral-300'>
                                                /year
                                            </small>
                                        </h3>
                                        <button
                                            type='button'
                                            className='inline-block w-full rounded bg-grey-300 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out border-2 '
                                            data-te-ripple-init
                                            data-te-ripple-color='light'
                                        >
                                            Buy
                                        </button>
                                    </div>
                                    <div className='p-6'>
                                        <ol className='list-inside'>
                                            <li className='mb-4 flex'>
                                                <svg
                                                    xmlns='http://www.w3.org/2000/svg'
                                                    fill='none'
                                                    viewBox='0 0 24 24'
                                                    strokeWidth='2'
                                                    stroke='currentColor'
                                                    className='mr-3 h-5 w-5 text-primary dark:text-primary-400'
                                                >
                                                    <path
                                                        strokeLinecap='round'
                                                        strokeLinejoin='round'
                                                        d='M4.5 12.75l6 6 9-13.5'
                                                    />
                                                </svg>
                                                Unlimited updates
                                            </li>
                                            {/* Add more list items here */}
                                        </ol>
                                    </div>
                                </div>
                            </div>

                            {/* Pricing Card 2 */}
                            <div>
                                <div
                                    className='block h-full rounded-lg bg-grey-400 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.08),0_10px_20px_-2px_rgba(0,0,0,0.1)] dark:bg-grey-600'
                                    style={{ zIndex: 1 }}
                                >
                                    <div className='border-b-2 border-neutral-100 border-opacity-100 p-6 text-center dark:border-opacity-10'>
                                        <p className='mb-4 text-sm uppercase'>
                                            <strong>Enterprise</strong>
                                        </p>
                                        <h3 className='mb-6 text-3xl'>
                                            <strong>$ 499</strong>
                                            <small className='text-base text-neutral-500 dark:text-neutral-300'>
                                                /year
                                            </small>
                                        </h3>
                                        <button
                                            type='button'
                                            className='inline-block w-full rounded bg-primary-100 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out border-2  '
                                            data-te-ripple-init
                                            data-te-ripple-color='light'
                                        >
                                            Buy
                                        </button>
                                    </div>
                                    <div className='p-6'>
                                        <ol className='list-inside'>
                                            <li className='mb-4 flex'>
                                                <svg
                                                    xmlns='http://www.w3.org/2000/svg'
                                                    fill='none'
                                                    viewBox='0 0 24 24'
                                                    strokeWidth='2'
                                                    stroke='currentColor'
                                                    className='mr-3 h-5 w-5 text-primary dark:text-primary-400'
                                                >
                                                    <path
                                                        strokeLinecap='round'
                                                        strokeLinejoin='round'
                                                        d='M4.5 12.75l6 6 9-13.5'
                                                    />
                                                </svg>
                                                Unlimited updates
                                            </li>
                                            {/* Add more list items here */}
                                        </ol>
                                    </div>
                                </div>
                            </div>

                            {/* Pricing Card 3 */}
                            <div className='py-12'>
                                <div className='block h-full rounded-lg bg-grey-300 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.08),0_10px_20px_-2px_rgba(0,0,0,0.1)] dark:bg-grey-800 lg:rounded-tl-none lg:rounded-bl-none'>
                                    <div className='border-b-2 border-neutral-100 border-opacity-100 p-6 text-center dark:border-opacity-10'>
                                        <p className='mb-4 text-sm uppercase'>
                                            <strong>Advanced</strong>
                                        </p>
                                        <h3 className='mb-6 text-3xl'>
                                            <strong>$ 299</strong>
                                            <small className='text-base text-neutral-500 dark:text-neutral-300'>
                                                /year
                                            </small>
                                        </h3>
                                        <button
                                            type='button'
                                            className='inline-block w-full rounded bg-primary-100 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out border-2 '
                                            data-te-ripple-init
                                            data-te-ripple-color='light'
                                        >
                                            Buy
                                        </button>
                                    </div>
                                    <div className='p-6'>
                                        <ol className='list-inside'>
                                            <li className='mb-4 flex'>
                                                <svg
                                                    xmlns='http://www.w3.org/2000/svg'
                                                    fill='none'
                                                    viewBox='0 0 24 24'
                                                    strokeWidth='2'
                                                    stroke='currentColor'
                                                    className='mr-3 h-5 w-5 text-primary dark:text-primary-400'
                                                >
                                                    <path
                                                        strokeLinecap='round'
                                                        strokeLinejoin='round'
                                                        d='M4.5 12.75l6 6 9-13.5'
                                                    />
                                                </svg>
                                                Unlimited updates
                                            </li>
                                            {/* Add more list items here */}
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </section>
        </>
    );
}

export default Pricing;
