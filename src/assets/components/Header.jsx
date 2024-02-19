import logo from '../image/Logo.png';
import profile from '../image/Profile.png';
import notification from '../image/NotificationIcon.png';
import setting from '../image/Setting.png';

export function Header() {
    return (
        <header className="w-full px-[50px] py-[15px] flex justify-between">
            <img src={logo} width={150} />
            <div className="flex gap-5">
                <div className="mt-4 w-[100px] h-[30px] bg-white rounded-[6px] flex items-center justify-center max-lg:hidden">
                    <p className="text-[11px] font-semibold">Upgrade Plan</p>
                </div>
                <a><img src={setting} className="mt-5 w-[20px] h-[20px] cursor-pointer"/></a>
                <img src={notification} className="mt-5 w-[20px] h-[20px] max-lg:hidden"/>
                <img src={profile} className="mt-4 w-[30px] h-[30px] ml-4 max-lg:hidden"/>
            </div>
        </header>
    )
}