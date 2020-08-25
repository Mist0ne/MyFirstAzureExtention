import * as VSS from "../lib/VSS.SDK";

VSS.require(["TFS/WorkItemTracking/Services"], function (_WorkItemServices) {
    function getWorkItemFormService()
    {
        return _WorkItemServices.WorkItemFormService.getService();
    }
    VSS.register(VSS.getContribution().id, () => ({
        onLoaded: function (args) {
            getWorkItemFormService().then(function(service) {
                service.getFieldValues([
                    "System.Id",
                    "System.Title", "System.State",
                    "System.CreatedDate"
                ]).then(value => {
                    console.log(args, value);
                });
            });
        }
    }));
    VSS.notifyLoadSucceeded();
});
