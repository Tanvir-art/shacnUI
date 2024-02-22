 
  

export default function Navbar ( ) {
  return (
    <div className="flex justify-between bg-[#111111] text-white py-6 px-10">
        <div className="text-2xl font-bold">
            {/* logo */}
            ShadCnUi
        </div>
        <div>
            {/* menu */}
            <ul className="flex gap-4 font-medium text-lg">
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>

    </div>
  );
}
