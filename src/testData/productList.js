import toolboxImg from "../assets/toolbox.jfif"
import guitarImg from "../assets/guitar.jfif"
import rockingChairImg from "../assets/rocking-chair.jfif"
import vynilRecordsImg from "../assets/vynil-records.jfif"

export const productList = [
    {
        id:"1",
        name:"Toolbox",
        description:"Toolbox in good shape. Only 3 pisces mising.",
        img: toolboxImg,
        price: 29,
        datePosted: "date",
        promotion: true,
        tags: ["tools","garage","hardware"]
    },
    {
        id:"2",
        name:"Guitar",
        description:"Guitar in playng shape.",
        img: guitarImg,
        price: 10,
        datePosted: "date",
        promotion: false,
        tags: ["instrument","music"]
    },
    {
        id:"3",
        name:"Rocking Chair",
        description:"Wooden rocking chair.",
        img: rockingChairImg,
        price: 19,
        datePosted: "date",
        promotion: true,
        tags: ["furniture","living room","house"]
    },
    {
        id:"4",
        name:"Vinyl Records",
        description:"Rock collection of over 50 vinyl records.",
        img: vynilRecordsImg,
        price: 50,
        datePosted: "date",
        promotion: true,
        tags: ["music"]
    }
]