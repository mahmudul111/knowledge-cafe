import profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <header className="text-4xl font-bold flex justify-between py-4 mx-4 border-b-2 items-center">
            <h1>Knowledge Cafe</h1>
            <img src={profile} alt="" />
        </header>
    );
};

export default Header;