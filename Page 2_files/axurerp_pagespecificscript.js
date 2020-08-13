
var PageName = 'Page 2';
var PageId = 'p22570091a903459ba4df817b570583d8'
document.title = 'Page 2';

if (top.location != self.location)
{
	if (parent.HandleMainFrameChanged) {
		parent.HandleMainFrameChanged();
	}
}

if (window.OnLoad) OnLoad();
