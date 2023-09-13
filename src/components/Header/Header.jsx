import profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <header className="text-5xl font-bold flex justify-between py-4 border-b-2 items-center max-w-7xl mx-auto">
            <h1>Knowledge <span className='text-pink-600'>Cafe</span></h1>
            <img src={profile} alt="" />
        </header>
    );
};

export default Header;