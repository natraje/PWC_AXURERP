
var PageName = 'Page 1';
var PageId = 'p3cd8ae8359594de0bc03896981c034a6'
document.title = 'Page 1';

if (top.location != self.location)
{
	if (parent.HandleMainFrameChanged) {
		parent.HandleMainFrameChanged();
	}
}

if (window.OnLoad) OnLoad();
