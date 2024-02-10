const items = [
    {name:"item1",priceUSd:10},
    {name:"item2",priceUSd:20},
    {name:"item3",priceUSd:30}
];
const exchange = 80;
    const Inr = items.map((element)=>{
        return {
            name:element.name,
            priceInRupee:element.priceUSd*exchange
        }


    })
    console.log(Inr)