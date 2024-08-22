import ButtonPrimary from "../../components/ButtonPrimary";
import { ICON_LOGO } from "../../datas";

const SignIn = () => {
    return (
        <>
            <section>
                <header className="sm:px-4 xl:px-0">
                    <div className="container lg:my-11 sm:py-12 lg:py-0">
                        <div>
                        {ICON_LOGO}
                        </div>
                    </div>
                </header>
                <main>
                    <div className="w-[410px] mx-auto sm:px-4 xl:px-0">
                        <h1 className="font-button font-normal md:text-[64px] sm:text-4xl text-black text-center">
                            Sign In
                        </h1>
                        <form action="">
                            <div className="my-10">
                                <label
                                    htmlFor="first_name"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Username
                                </label>
                                <input
                                    type="text"
                                    id="first_name"
                                    className="w-full md:h-[57px] sm:h-[50px] bg-gray-50 border border-black text-gray-900
                                    text-sm rounded-[6px] focus:outline-none px-5"
                                />
                            </div>
                            <ButtonPrimary
                                title="Sign In"
                                typeElement="button"
                                propsclassName="w-full"
                                type="submit"
                            />
                        </form>
                    </div>
                </main>
            </section>
        </>
    );
};

export default SignIn;
