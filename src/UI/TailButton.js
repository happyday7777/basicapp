

export default function TailButton({caption, bgColor, handClick}) {

    const colorB = {
        blue: 'bg-blue-600',
        red: 'bg-red-600',
        green: 'bg-green-600',
        orange: 'bg-orange-600'
    }

    const colorBHover = {
        blue: 'hover:bg-blue-800',
        red: 'hover:bg-red-800',
        green: 'hover:bg-green-800',
        orange: 'hover:bg-orange-800'
    }

    return (
    <button className={`inline-flex px-5 py-3 rounded-md mx-2 justify-center items-center
                    text-white font-bold ${colorB[bgColor]} ${colorBHover[bgColor]}`}
            onClick={handClick}
                    >
        {caption}   
    </button>
    )
}
