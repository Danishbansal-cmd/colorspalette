import {sideBarElements} from '../../config/index';


function SideBar() {
  return ( 
    <div className="min-w-50 min-h-screen px-5 pt-5">
        
           { 
           sideBarElements.map((item, index) => (
            <div className='flex items-center gap-4 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full px-4 py-3' key={index}>
                <div> {<item.icon style={{fontSize: "2rem"}}/>}</div>
                <div className='text-bold text-lg'> {item.title}</div>
            </div>
           ))
           }
    </div>
   )
}

export default SideBar;