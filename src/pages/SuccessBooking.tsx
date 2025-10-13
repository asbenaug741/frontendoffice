export default function SuccessBooking(){{
    return(
        <>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link href="./output.css" rel="stylesheet" />
            <link
                href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap"
                rel="stylesheet"
            />
            <nav className="bg-white">
                <div className="flex items-center justify-between w-full max-w-[1130px] py-[22px] mx-auto">
                <a href="index.html">
                    <img src="assets/images/logos/logo.svg" alt="logo" />
                </a>
                <ul className="flex items-center gap-[50px] w-fit">
                    <li>
                    <a href="">Browse</a>
                    </li>
                    <li>
                    <a href="">Popular</a>
                    </li>
                    <li>
                    <a href="">Categories</a>
                    </li>
                    <li>
                    <a href="">Events</a>
                    </li>
                    <li>
                    <a href="view-booking-details.html">My Booking</a>
                    </li>
                </ul>
                <a
                    href="#"
                    className="flex items-center gap-[10px] rounded-full border border-[#000929] py-3 px-5"
                >
                    <img
                    src="assets/images/icons/call.svg"
                    className="w-6 h-6"
                    alt="icon"
                    />
                    <span className="font-semibold">Contact Us</span>
                </a>
                </div>
            </nav>
            <section className="flex flex-1 py-10">
                <div className="flex flex-col w-[450px] m-auto rounded-[20px] border border-[#E0DEF7] p-[30px] gap-[30px] bg-white">
                <div className="flex items-center gap-4">
                    <img
                    src="assets/images/icons/verify.svg"
                    className="w-[50px] h-[50px] flex shrink-0"
                    alt="icon"
                    />
                    <h1 className="font-extrabold text-[28px] leading-[38px]">
                    Booking Finished
                    </h1>
                </div>
                <hr className="border-[#F6F5FD]" />
                <div className="flex items-center gap-4">
                    <div className="flex shrink-0 w-[140px] h-[100px] rounded-[20px] overflow-hidden">
                    <img
                        src="assets/images/thumbnails/thumbnail-details-4.png"
                        className="w-full h-full object-cover"
                        alt="thumbnail"
                    />
                    </div>
                    <div className="flex flex-col gap-2">
                    <p className="font-bold text-xl leading-[30px]">
                        Angga Park Central Master Capitalize
                    </p>
                    <div className="flex items-center gap-[6px]">
                        <img
                        src="assets/images/icons/location.svg"
                        className="w-6 h-6"
                        alt="icon"
                        />
                        <p className="font-semibold">Jakarta Pusat</p>
                    </div>
                    </div>
                </div>
                <hr className="border-[#F6F5FD]" />
                <div className="flex items-center gap-4">
                    <img
                    src="assets/images/icons/receipt-text.svg"
                    className="w-[34px] h-[34px]"
                    alt="icon"
                    />
                    <div>
                    <p className="font-bold">FO1893009</p>
                    <p className="text-sm leading-[21px] mt-[2px]">
                        Save your booking ID securely
                    </p>
                    </div>
                </div>
                <hr className="border-[#F6F5FD]" />
                <p className="font-semibold leading-[28px] text-center">
                    Pesanan Anda sedang kami proses, kami akan menginformasikan status Anda
                    melalui SMS
                </p>
                <a
                    href="view-booking-details.html"
                    className="flex items-center justify-center w-full rounded-full p-[16px_26px] gap-3 bg-[#0D903A] font-bold text-[#F7F7FD]"
                >
                    <span>View Booking Details</span>
                </a>
                </div>
            </section>
            </>

    );
}}