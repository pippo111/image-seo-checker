chrome.runtime.onMessage.addListener(handleMessage);

function handleMessage(message, sender, sendresponse) {
    console.log(message.txt);
    
    const images = document.getElementsByTagName("img");
    
    console.log(images)

	for(img of images)
	{
		img.style['border'] = '4px dashed red';
	}
}
