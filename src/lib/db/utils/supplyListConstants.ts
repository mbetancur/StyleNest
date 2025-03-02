export const supplyConstants: { [key: string]: string } = {
    barbershop: "Barberia",
    manicure: "Manicura",
};

export const supplyListMatcher = (supplyList: string): string => {  
    return supplyConstants[supplyList] || "Otro";
}