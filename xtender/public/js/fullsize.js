
// const recordAudio = () =>
//       new Promise(resolve => {
//         navigator.mediaDevices.getUserMedia({audio: true}).then((stream) => {
//         const mediaRecorder = new MediaRecorder(stream);
//         let audioChunks = [];

//         mediaRecorder.addEventListener('dataavailable', event => {
//           audioChunks.push(event.data);
//         });

//         const start = () => {
//           audioChunks = [];
//           mediaRecorder.start();
//         };

//         const stop = () =>
//           new Promise(resolve => {
//             mediaRecorder.addEventListener('stop', () => {
//               const audioBlob = new Blob(audioChunks, {type: 'audio/mpeg'});
//               const audioUrl = URL.createObjectURL(audioBlob);
//               const audio = new Audio(audioUrl);
//               const play = () => audio.play();
//               resolve({audioChunks, audioBlob, audioUrl, play});
//             });

//             mediaRecorder.stop();
//           });

//         resolve({start, stop});
//         });
//       });

//     const sleep = time => new Promise(resolve => setTimeout(resolve, time));

//     const recordButton = document.querySelector('[data-fieldname^=btn_rec]');
//     const stopButton = document.querySelector('#i_btn_stop');
//     const playButton = document.querySelector('#i_btn_play');
//     const saveButton = document.querySelector('#i_btn_upload');
//     const savedAudioMessagesContainer = document.querySelector('#saved-audio-messages');

//     let recorder;
//     let audio;
//       if (recordButton) {
//     recordButton.addEventListener('click', async () => {
//       recordButton.setAttribute('disabled', true);
//       stopButton.removeAttribute('disabled');
//       playButton.setAttribute('disabled', true);
//       saveButton.setAttribute('disabled', true);
//       if (!recorder) {
//         recorder = await recordAudio();
//       }
//       recorder.start();
//     });
//       }
//       if (stopButton) {
//     stopButton.addEventListener('click', async () => {
//       recordButton.removeAttribute('disabled');
//       stopButton.setAttribute('disabled', true);
//       playButton.removeAttribute('disabled');
//       saveButton.removeAttribute('disabled');
//       audio = await recorder.stop();
//     });
//       }
//       if(playButton) {
//     playButton.addEventListener('click', () => {
//       audio.play();
//     });
//       }
//        if(saveButton) {
//     saveButton.addEventListener('click', () => {
//       const reader = new FileReader();
//       reader.readAsDataURL(audio.audioBlob);
//       reader.onload = () => {
//         const base64AudioMessage = reader.result.split(',')[1];

//         fetch('/cc/recorder', {
//           method: 'POST',
//           headers: {'Content-Type': 'application/json'},
//           body: JSON.stringify({message: base64AudioMessage, import_id: cur_frm.doc.name})
//         }).then(res => {
//           if (res.status === 201) {
//             return populateAudioMessages();
//           }
//           console.log('Invalid status saving audio message: ' + res.status);
//         });
//       };
//     });
//        }
//     const populateAudioMessages = () => {
//         if(cur_frm) {
//       return fetch('/cc/records', {
//           method: 'POST',
//           headers: {'Content-Type': 'application/json'},
//           body: JSON.stringify({import_id: cur_frm.doc.name})
//         }).then(res => {
//         if (res.status === 200) {
//           return res.json().then(json => {
//             json.messageFilenames.forEach(filename => {
//               let audioElement = document.querySelector(`[data-audio-filename="${filename}"]`);
//               if (!audioElement) {
//                 audioElement = document.createElement('audio');
//                 audioElement.src = `/files/messages/${cur_frm.doc.name}/${filename}`;
//                 audioElement.setAttribute('data-audio-filename', filename);
//                 audioElement.setAttribute('controls', true);
//                 cur_frm.get_field('recording_html').$wrapper.append(audioElement);
//               }
//             });
//           });
//         }
//         console.log('Invalid status getting messages: ' + res.status);
//       });
//     };
//     }
//     populateAudioMessages();
//webkitURL is deprecated but nevertheless
// URL = window.URL || window.webkitURL;

// var gumStream; 						//stream from getUserMedia()
// var recorder; 						//MediaRecorder object
// var chunks = [];					//Array of chunks of audio data from the browser
// var extension;

// // var recordButton = document.querySelector('[data-label=btn_rec]');
// // var stopButton = document.getElementById("stopButton");
// // var pauseButton = document.getElementById("pauseButton");

// // //add events to those 2 buttons
// // recordButton.addEventListener("click", startRecording);
// // stopButton.addEventListener("click", stopRecording);
// // pauseButton.addEventListener("click", pauseRecording);

// // true on chrome, false on firefox
// console.log("audio/webm:"+MediaRecorder.isTypeSupported('audio/webm;codecs=opus'));
// // false on chrome, true on firefox
// console.log("audio/ogg:"+MediaRecorder.isTypeSupported('audio/ogg;codecs=opus'));

// if (MediaRecorder.isTypeSupported('audio/webm;codecs=opus')){
// 	extension="webm";
// }else{
// 	extension="ogg"
// }


// function startRecording() {
// 	console.log("recordButton clicked");

// 	/*
// 		Simple constraints object, for more advanced audio features see
// 		https://addpipe.com/blog/audio-constraints-getusermedia/
// 	*/
    
//     var constraints = {audio: true}

//  	/*
//     	Disable the record button until we get a success or fail from getUserMedia() 
// 	*/

// 	// recordButton.disabled = true;
// 	// stopButton.disabled = false;
// 	// pauseButton.disabled = false

// 	/*
//     	We're using the standard promise based getUserMedia() 
//     	https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia
// 	*/

// 	navigator.mediaDevices.getUserMedia(constraints).then(function(stream) {
// 		console.log("getUserMedia() success, stream created, initializing MediaRecorder");

// 		/*  assign to gumStream for later use  */
// 		gumStream = stream;

// 		var options = {
// 	      audioBitsPerSecond :  256000,
// 	      videoBitsPerSecond : 2500000,
// 	      bitsPerSecond:       2628000,
// 	      mimeType : 'audio/'+extension+';codecs=opus'
// 	    }

// 	    //update the format 
// 		cur_frm.get_field('recording_html').$wrapper.append('Sample rate: 48kHz, MIME: audio/'+extension+';codecs=opus');

// 		/* 
// 			Create the MediaRecorder object
// 		*/
// 		recorder = new MediaRecorder(stream, options);

// 		//when data becomes available add it to our attay of audio data
// 	    recorder.ondataavailable = function(e){
// 	    	console.log("recorder.ondataavailable:" + e.data);
	    	
// 	    	console.log ("recorder.audioBitsPerSecond:"+recorder.audioBitsPerSecond)
// 	    	console.log ("recorder.videoBitsPerSecond:"+recorder.videoBitsPerSecond)
// 	    	console.log ("recorder.bitsPerSecond:"+recorder.bitsPerSecond)
// 	      	// add stream data to chunks
// 	      	chunks.push(e.data);
// 	      	// if recorder is 'inactive' then recording has finished
// 	      	if (recorder.state == 'inactive') {
// 	          // convert stream data chunks to a 'webm' audio format as a blob
// 	          const blob = new Blob(chunks, { type: 'audio/'+extension, bitsPerSecond:128000});
// 	          createDownloadLink(blob)
// 	      	}
// 	    };

// 	    recorder.onerror = function(e){
// 	    	console.log(e.error);
// 	    }

// 	    //start recording using 1 second chunks
// 	    //Chrome and Firefox will record one long chunk if you do not specify the chunck length
// 	    recorder.start(1000);

//     	//recorder.start();
//     }).catch(function(err) {
// 	  	//enable the record button if getUserMedia() fails
//     	// recordButton.disabled = false;
//     	// stopButton.disabled = true;
//     	// pauseButton.disabled = true
// 	});
// }

// function pauseRecording(){
// 	console.log("pauseButton clicked recorder.state=",recorder.state );
// 	if (recorder.state=="recording"){
// 		//pause
// 		recorder.pause();
// 		// pauseButton.innerHTML="Resume";
// 	}else if (recorder.state=="paused"){
// 		//resume
// 		recorder.resume();
// 		// pauseButton.innerHTML="Pause";

// 	}
// }

// function stopRecording() {
// 	console.log("stopButton clicked");

// 	//disable the stop button, enable the record too allow for new recordings
// 	// stopButton.disabled = true;
// 	// recordButton.disabled = false;
// 	// pauseButton.disabled = true;

// 	//reset button just in case the recording is stopped while paused
// 	// pauseButton.innerHTML="Pause";
	
// 	//tell the recorder to stop the recording
// 	recorder.stop();

// 	//stop microphone access
// 	gumStream.getAudioTracks()[0].stop();
// }

// function createDownloadLink(blob) {
	
// 	var url = URL.createObjectURL(blob);
// 	var au = document.createElement('audio');
// 	var li = document.createElement('li');
// 	var link = document.createElement('a');

// 	//add controls to the <audio> element
// 	au.controls = true;
// 	au.src = url;

// 	//link the a element to the blob
// 	link.href = url;
// 	link.download = new Date().toISOString() + '.'+extension;
// 	link.innerHTML = link.download;

// 	//add the new audio and a elements to the li element
// 	li.appendChild(au);
// 	li.appendChild(link);

// 	//add the li element to the ordered list
// 	cur_frm.get_field('recording_html').$wrapper.append(li);
// }