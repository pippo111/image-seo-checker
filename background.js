chrome.browserAction.onClicked.addListener(iconClicked);

function iconClicked(tab) {
	const event = 'ACTION'
	chrome.tabs.sendMessage(tab.id, event);
}
