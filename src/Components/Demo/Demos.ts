interface Iproduct
{
    Name: string;
    Price: number;
    Qty: number;
    Total(): number;
    Print():void;
}
abstract class ProductTemplate implements Iproduct{
    public Name: string='';
    public Price: number=0;
    public Qty: number=0;
    abstract Total(): number;
    abstract Print():void;
}