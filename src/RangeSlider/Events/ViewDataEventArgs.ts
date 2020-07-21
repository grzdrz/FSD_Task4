import EventArgs from "./EventArgs";
import IViewData from "../MVP/Views/IViewData";

class ViewDataEventArgs extends EventArgs {
    public data: IViewData;

    constructor(data: IViewData) {
        super();
        this.data = (data !== undefined ? data : {});
    }
}

export default ViewDataEventArgs;
