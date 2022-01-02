import MenuList from './MenuList';

function SidebarSection() {
    return (
        <div className="flex-shrink flex flex-col items-center py-8 w-72 h-full gap-4 bg-dark-80">
            <div className="main-logo w-auto h-auto">
                <img src="./assets/img/logo.png"></img>
            </div>
            <div className="user-profile w-full flex flex-col items-center">
                <div className="user-image w-16 h-16 bg-soft-white rounded-full">
                </div>
                <div className="text-soft-white font-bold mt-2">
                    Rai Raksa M
                </div>
            </div>
            <div className="menu-tree w-full">
                <MenuList />
            </div>
        </div>
    )
}

export default SidebarSection;