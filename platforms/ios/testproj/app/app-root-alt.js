
const app = require("application");
var view = require("ui/core/view");
var Frame = require("ui/frame").Frame;
const timerModule = require("tns-core-modules/timer");

function navigatingTo(args) {
    var page = args.object;
    page.actionBarHidden = true;
    if (app.android) {
        const activity = app.android.startActivity;
        const win = activity.getWindow();
        win.addFlags(android.view.WindowManager.LayoutParams.FLAG_FULLSCREEN);
    }
}
exports.navigatingTo = navigatingTo;

function onLoaded(args) {
    var page = args.object;
    var mainContainer = view.getViewById(page, "mainContainer");
    var mainFrame = new Frame();
    mainFrame.visibility = "collapsed";
    mainContainer.addChild(mainFrame);
    mainFrame.navigate({moduleName: "main-page", animated:false});
    timerModule.setTimeout(()=>{
        mainFrame.visibility = "visible";
    }, 500);
}
exports.onLoaded = onLoaded;