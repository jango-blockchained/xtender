// // async function xcall(method, args) {
	
// // 	// import router from '@/router';
// // 	// const xrouter = frappe.get_route();
// // 	if (!args) {
// // 		args = {};
// // 	}

// // 	let headers = {
// // 		'Accept': 'application/json',
// // 		'Content-Type': 'application/json; charset=utf-8',
// // 		'X-Frappe-Site-Name': window.location.hostname
		
// // 	};

// // 	if (frappe.csrf_token && frappe.csrf_token !== '{{ csrf_token }}') {
// // 		headers['X-Frappe-CSRF-Token'] = frappe.csrf_token;
// // 	}

// // 	updateState(this, 'RequestStarted', null);

// // 	const res = await fetch(`/api/method/${method}`, {
// // 		method: 'POST',
// // 		headers,
// // 		body: JSON.stringify(args)
// // 	});

// // 	if (res.ok) {
// // 		updateState(this, null, null);
// // 		const data = await res.json();
// // 		if (data.docs || method === 'login') {
// // 			return data;
// // 		}
// // 		return data.message;
// // 	} else {
// // 		let response = await res.text();
// // 		let error, exception;
// // 		try {
// // 			error = JSON.parse(response);
// // 			// eslint-disable-next-line no-empty
// // 		} catch (e) {}
// // 		let errorParts = [
// // 			[method, error.exc_type, error._error_message].filter(Boolean).join(' ')
// // 		];
// // 		if (error.exc) {
// // 			exception = error.exc;
// // 			try {
// // 				exception = JSON.parse(exception)[0];
// // 				// eslint-disable-next-line no-empty
// // 			} catch (e) {}
// // 			errorParts.push(exception);
// // 		}
// // 		let e = new Error(errorParts.join('\n'));
// // 		e.exc_type = error.exc_type;
// // 		e.exc = exception;
// // 		e.messages = error._server_messages
// // 			? JSON.parse(error._server_messages)
// // 			: [];
// // 		e.messages = e.messages.concat(error.message);
// // 		e.messages = e.messages.map(m => {
// // 			try {
// // 				return JSON.parse(m).message;
// // 			} catch (error) {
// // 				return m;
// // 			}
// // 		});
// // 		e.messages = e.messages.filter(Boolean);
// // 		if (!e.messages.length) {
// // 			e.messages = error._error_message ? [error._error_message] : ['Internal Server Error'];
// // 		}
// // 		updateState(this, null, e.messages.join('\n'));

// // 		// if (
// // 		// 	[401, 403].includes(res.status) &&
// // 		// 	xrouter.includes !== 'Login'
// // 		// ) {
// // 		// 	router.push('/login');
// // 		// }
// // 		// throw e;
// // 	}

// // 	function updateState(vm, state, errorMessage) {
// // 		if (vm?.state !== undefined) {
// // 			vm.state = state;
// // 		}
// // 		if (vm?.errorMessage !== undefined) {
// // 			vm.errorMessage = errorMessage;
// // 		}
// // 	}
// // }


// // // //webkitURL is deprecated but nevertheless
// // // URL = window.URL || window.webkitURL;

// // // var gumStream; 						//stream from getUserMedia()
// // // var recorder; 						//MediaRecorder object
// // // var chunks = [];					//Array of chunks of audio data from the browser
// // // var extension;

// // // var recordButton = document.getElementById("recordButton");
// // // var stopButton = document.getElementById("stopButton");
// // // var pauseButton = document.getElementById("pauseButton");

// // // //add events to those 2 buttons
// // // recordButton.addEventListener("click", startRecording);
// // // stopButton.addEventListener("click", stopRecording);
// // // pauseButton.addEventListener("click", pauseRecording);

// // // // true on chrome, false on firefox
// // // console.log("audio/webm:"+MediaRecorder.isTypeSupported('audio/webm;codecs=opus'));
// // // // false on chrome, true on firefox
// // // console.log("audio/ogg:"+MediaRecorder.isTypeSupported('audio/ogg;codecs=opus'));

// // // if (MediaRecorder.isTypeSupported('audio/webm;codecs=opus')){
// // // 	extension="webm";
// // // }else{
// // // 	extension="ogg"
// // // }


// // // function startRecording() {
// // // 	console.log("recordButton clicked");

// // // 	/*
// // // 		Simple constraints object, for more advanced audio features see
// // // 		https://addpipe.com/blog/audio-constraints-getusermedia/
// // // 	*/
    
// // //     var constraints = {audio: true}

// // //  	/*
// // //     	Disable the record button until we get a success or fail from getUserMedia() 
// // // 	*/

// // // 	recordButton.disabled = true;
// // // 	stopButton.disabled = false;
// // // 	pauseButton.disabled = false

// // // 	/*
// // //     	We're using the standard promise based getUserMedia() 
// // //     	https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia
// // // 	*/

// // // 	navigator.mediaDevices.getUserMedia(constraints).then(function(stream) {
// // // 		console.log("getUserMedia() success, stream created, initializing MediaRecorder");

// // // 		/*  assign to gumStream for later use  */
// // // 		gumStream = stream;

// // // 		var options = {
// // // 	      audioBitsPerSecond :  256000,
// // // 	      videoBitsPerSecond : 2500000,
// // // 	      bitsPerSecond:       2628000,
// // // 	      mimeType : 'audio/'+extension+';codecs=opus'
// // // 	    }

// // // 	    //update the format 
// // // 		document.getElementById("formats").innerHTML='Sample rate: 48kHz, MIME: audio/'+extension+';codecs=opus';

// // // 		/* 
// // // 			Create the MediaRecorder object
// // // 		*/
// // // 		recorder = new MediaRecorder(stream, options);

// // // 		//when data becomes available add it to our attay of audio data
// // // 	    recorder.ondataavailable = function(e){
// // // 	    	console.log("recorder.ondataavailable:" + e.data);
	    	
// // // 	    	console.log ("recorder.audioBitsPerSecond:"+recorder.audioBitsPerSecond)
// // // 	    	console.log ("recorder.videoBitsPerSecond:"+recorder.videoBitsPerSecond)
// // // 	    	console.log ("recorder.bitsPerSecond:"+recorder.bitsPerSecond)
// // // 	      	// add stream data to chunks
// // // 	      	chunks.push(e.data);
// // // 	      	// if recorder is 'inactive' then recording has finished
// // // 	      	if (recorder.state == 'inactive') {
// // // 	          // convert stream data chunks to a 'webm' audio format as a blob
// // // 	          const blob = new Blob(chunks, { type: 'audio/'+extension, bitsPerSecond:128000});
// // // 	          createDownloadLink(blob)
// // // 	      	}
// // // 	    };

// // // 	    // recorder.onerror = function(e){
// // // 	    	console.log(e.error);
// // // 	    }

// // // 	    //start recording using 1 second chunks
// // // 	    //Chrome and Firefox will record one long chunk if you do not specify the chunck length
// // // 	    recorder.start(1000);

// // //     	//recorder.start();
// // //     }).catch(function(err) {
// // // 	  	//enable the record button if getUserMedia() fails
// // //     	recordButton.disabled = false;
// // //     	stopButton.disabled = true;
// // //     	pauseButton.disabled = true
// // // 	});
// // // }

// // // function pauseRecording(){
// // // 	console.log("pauseButton clicked recorder.state=",recorder.state );
// // // 	if (recorder.state=="recording"){
// // // 		//pause
// // // 		recorder.pause();
// // // 		pauseButton.innerHTML="Resume";
// // // 	}else if (recorder.state=="paused"){
// // // 		//resume
// // // 		recorder.resume();
// // // 		pauseButton.innerHTML="Pause";

// // // 	}
// // // }

// // // function stopRecording() {
// // // 	console.log("stopButton clicked");

// // // 	//disable the stop button, enable the record too allow for new recordings
// // // 	stopButton.disabled = true;
// // // 	recordButton.disabled = false;
// // // 	pauseButton.disabled = true;

// // // 	//reset button just in case the recording is stopped while paused
// // // 	pauseButton.innerHTML="Pause";
	
// // // 	//tell the recorder to stop the recording
// // // 	recorder.stop();

// // // 	//stop microphone access
// // // 	gumStream.getAudioTracks()[0].stop();
// // // }

// // // function createDownloadLink(blob) {
	
// // // 	var url = URL.createObjectURL(blob);
// // // 	var au = document.createElement('audio');
// // // 	var li = document.createElement('li');
// // // 	var link = document.createElement('a');

// // // 	//add controls to the <audio> element
// // // 	au.controls = true;
// // // 	au.src = url;

// // // 	//link the a element to the blob
// // // 	link.href = url;
// // // 	link.download = new Date().toISOString() + '.'+extension;
// // // 	link.innerHTML = link.download;

// // // 	//add the new audio and a elements to the li element
// // // 	li.appendChild(au);
// // // 	li.appendChild(link);

// // // 	//add the li element to the ordered list
// // // 	recordingsList.appendChild(li);
// // // }
// //webkitURL is deprecated but nevertheless
// URL = window.URL || window.webkitURL;

// var gumStream; 						//stream from getUserMedia()
// var recorder; 						//WebAudioRecorder object
// var input; 							//MediaStreamAudioSourceNode  we'll be recording
// var encodingType; 					//holds selected encoding for resulting audio (file)
// var encodeAfterRecord = true;       // when to encode

// // shim for AudioContext when it's not avb. 
// var AudioContext = window.AudioContext || window.webkitAudioContext;
// var audioContext; //new audio context to help us record

// var encodingTypeSelect = document.getElementById("encodingTypeSelect");
// var recordButton = document.getElementById("recordButton");
// var stopButton = document.getElementById("stopButton");

// //add events to those 2 buttons
// recordButton.addEventListener("click", startRecording);
// stopButton.addEventListener("click", stopRecording);

// function startRecording() {
// 	console.log("startRecording() called");

// 	/*
// 		Simple constraints object, for more advanced features see
// 		https://addpipe.com/blog/audio-constraints-getusermedia/
// 	*/
    
//     var constraints = { audio: true, video:false }

//     /*
//     	We're using the standard promise based getUserMedia() 
//     	https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia
// 	*/

// 	navigator.mediaDevices.getUserMedia(constraints).then(function(stream) {
// 		__log("getUserMedia() success, stream created, initializing WebAudioRecorder...");

// 		/*
// 			create an audio context after getUserMedia is called
// 			sampleRate might change after getUserMedia is called, like it does on macOS when recording through AirPods
// 			the sampleRate defaults to the one set in your OS for your playback device

// 		*/
// 		audioContext = new AudioContext();

// 		//update the format 
// 		document.getElementById("formats").innerHTML="Format: 2 channel "+encodingTypeSelect.options[encodingTypeSelect.selectedIndex].value+" @ "+audioContext.sampleRate/1000+"kHz"

// 		//assign to gumStream for later use
// 		gumStream = stream;
		
// 		/* use the stream */
// 		input = audioContext.createMediaStreamSource(stream);
		
// 		//stop the input from playing back through the speakers
// 		//input.connect(audioContext.destination)

// 		//get the encoding 
// 		encodingType = encodingTypeSelect.options[encodingTypeSelect.selectedIndex].value;
		
// 		//disable the encoding selector
// 		encodingTypeSelect.disabled = true;

// 		recorder = new WebAudioRecorder(input, {
// 		  workerDir: "js/", // must end with slash
// 		  encoding: encodingType,
// 		  numChannels:2, //2 is the default, mp3 encoding supports only 2
// 		  onEncoderLoading: function(recorder, encoding) {
// 		    // show "loading encoder..." display
// 		    __log("Loading "+encoding+" encoder...");
// 		  },
// 		  onEncoderLoaded: function(recorder, encoding) {
// 		    // hide "loading encoder..." display
// 		    __log(encoding+" encoder loaded");
// 		  }
// 		});

// 		recorder.onComplete = function(recorder, blob) { 
// 			__log("Encoding complete");
// 			createDownloadLink(blob,recorder.encoding);
// 			encodingTypeSelect.disabled = false;
// 		}

// 		recorder.setOptions({
// 		  timeLimit:120,
// 		  encodeAfterRecord:encodeAfterRecord,
// 	      ogg: {quality: 0.5},
// 	      mp3: {bitRate: 160}
// 	    });

// 		//start the recording process
// 		recorder.startRecording();

// 		 __log("Recording started");

// 	}).catch(function(err) {
// 	  	//enable the record button if getUSerMedia() fails
//     	recordButton.disabled = false;
//     	stopButton.disabled = true;

// 	});

// 	//disable the record button
//     recordButton.disabled = true;
//     stopButton.disabled = false;
// }

// function stopRecording() {
// 	console.log("stopRecording() called");
	
// 	//stop microphone access
// 	gumStream.getAudioTracks()[0].stop();

// 	//disable the stop button
// 	stopButton.disabled = true;
// 	recordButton.disabled = false;
	
// 	//tell the recorder to finish the recording (stop recording + encode the recorded audio)
// 	recorder.finishRecording();

// 	__log('Recording stopped');
// }

// function createDownloadLink(blob,encoding) {
	
// 	var url = URL.createObjectURL(blob);
// 	var au = document.createElement('audio');
// 	var li = document.createElement('li');
// 	var link = document.createElement('a');

// 	//add controls to the <audio> element
// 	au.controls = true;
// 	au.src = url;

// 	//link the a element to the blob
// 	link.href = url;
// 	link.download = new Date().toISOString() + '.'+encoding;
// 	link.innerHTML = link.download;

// 	//add the new audio and a elements to the li element
// 	li.appendChild(au);
// 	li.appendChild(link);

// 	//add the li element to the ordered list
// 	recordingsList.appendChild(li);
// }



// //helper function
// function __log(e, data) {
// 	log.innerHTML += "\n" + e + " " + (data || '');
// }