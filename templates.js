
Pablo.template('child', function(options){
	  var config = Pablo.extend({x: 0, y: 0, fill: '#00AEEF'}, options);
		var x = config.x,
				y = config.y,
				fill = config.fill,
				pathString = "M15.025-1.99c-0.43,1.355,0.062,3.203,0.266,4.895c0.332,0.336,0.867,0.289,1.508,0.041 c0.467,1.672,2.914,1.818,4.078,2.725c1.633,1.275,1.652,3.1,3.434,4.672c-0.516,1.611,0.473,3.418-0.717,4.955 c0.959,1.381,0.385,3.291-0.994,4.041c3.129,2.148,5.445,7.922,5.957,12.865c-1.012,0.344-1.955,0.572-2.645,0.314 c0.172,3.809,1.453,8.857-4.318,7.805c-0.768-0.844-0.959-2.365-0.459-3.098c-0.809,0.141-1.246,0.48-1.75,0.789 c-1.254-1.109-2.82-1.625-3.762-3.322c-0.555,0.203-1.086,0.371-1.438,0.191c-0.271-0.205-0.488-0.516-0.578-1.064 c-3.539,0.576-4.42-3.879-6.406-6.246c0.445-2.223-0.242-3.16-0.32-5.879c-0.742,0.883-2.695,0.193-3.988-0.016 c-0.184-1.814,0.074-2.99-1.176-4.623c0.191-0.66,0.75-1.123,0.945-1.783c-3.359-3.713,1.262-7.555,3.914-9.93 C5.832,3.756,4.482,3.305,3.568,2.039c-0.379-0.93,0.691-0.391,1.066-0.578c-7.395-8.562,9.307-14.717,9.504-3.924 C14.029-1.547,14.947-2.564,15.025-1.99 M17.195,31.713c1.107,0.191,1.496,1.736,3.064,1.051 c-0.938-2.035-2.629-4.434-2.855-6.844C16.236,27.271,18.593,30.49,17.195,31.713";

		return Pablo.path({
			  class: 'child',
				d: pathString,
				fill: fill,
				transform: 'translate('+ (x + 5) + ',' + (y + 10) +')'
		});
});

Pablo.template('mother', function(options){
	  var config = Pablo.extend({x: 0, y: 0, fill: '#39B54A'}, options);
		var x = config.x,
				y = config.y,
				fill = config.fill,
				pathString = "M40.471,91.215c0.299,0.527,0.6,1.16,0.662,1.283c0.113,0.207,0.188-0.504,0.246-0.688 c0.061-0.186,0.234-0.504,0.125-0.811c-0.113-0.305-0.344-1.406-0.463-1.598c-0.123-0.197-0.211-1.129-0.211-1.129 s-0.143-0.072-0.154-0.242c-0.014-0.174-0.172-0.602-0.172-0.602s-0.1,0.613-0.246,1.436c-0.146,0.814-0.246,1.65-0.246,1.65 S40.258,90.842,40.471,91.215 M56.66,102.639c0,0,0.242,0.088,0.619-0.281s0.469-0.604,0.469-0.604L56.66,102.639z M43.395,70.904c0,0-0.367-0.498-0.193-1.408c0.17-0.902,1.053-3.422,1.053-3.422s0.078-0.592,0.219-1.062 c0.119-0.402,0.305-0.691,0.305-0.691s-0.211-0.246-0.193-0.596c0.012-0.258,0.246-0.623,0.295-0.695 c0.109-0.174,0.174-0.258,0.193-0.514c0.021-0.254,0.355-0.342,0.391-0.488c0.039-0.148,0.223-0.27,0.318-0.295 c0.098-0.025,0.121-0.193,0.219-0.221c0.098-0.025,0.543-0.111,0.637-0.137c0.094-0.029,0.158-0.08,0.262-0.16 c0.105-0.082-0.104-0.055-0.305-0.039c-0.199,0.012-0.502-0.148-0.211-0.211c0.293-0.066,0.648-0.16,0.545-0.225 c-0.105-0.066-0.873-0.078-0.094-0.713c0.088-0.07,0.633-0.625,1.109-0.688c0.479-0.062,1.018,0.305,1.285,0.344 c0.264,0.039,0.264-0.252,0.701-0.158c0.436,0.09,1.572,0.83,1.957,1.18c0.383,0.342,0.598,0.658,0.598,0.658 s0.406-0.014,0.512,0.227c0.109,0.234,0.17,0.449,0.264,0.559c0.094,0.104,0.396,1.121,0.396,1.121 c0.307,0.371,0.355,0.713,0.355,0.713s0.242,0.619,0.254,0.795c0.012,0.172,0.143,0.307,0.225,0.633 c0.076,0.33-0.08,0.41-0.08,0.41c0.186,0.609-0.102,0.676-0.156,0.742c-0.057,0.062,0,0.412-0.186,0.742 c-0.188,0.326-0.342,0.25-0.342,0.25c-0.215,0.871-0.689,1.15-0.689,1.15s-0.246,0.674-0.463,1.096 c-0.105,0.213-0.59,1.328-1.223,2.145c-0.301,0.391-0.496,0.629-0.795,0.867c-0.322,0.258-0.746,0.5-0.891,0.561 c-0.555,0.225-0.768,0.33-0.846,0.465c-0.082,0.129-0.105,0.459-0.105,0.459s0.711,0.625,1.336,1.02 c0.621,0.396,0.818,0.488,0.883,0.438c0.066-0.055,0.744,0.145,0.848,0.16c0.107,0.012,0.307,0.062,0.307,0.062 c0.158,0.016,0.264,0.188,0.264,0.188s1.254,0.273,1.904,1.348c0.645,1.07,1.348,3.281,1.547,4.363 c0.197,1.084,0.504,3.314,0.896,4.705c0.398,1.389,1.02,2.734,1.336,3.99c0.32,1.26,0.674,2.158,0.633,3.836 c-0.039,1.684-0.199,3.703-0.117,4.301c0.035,0.27,0.182,0.979,0.066,1.5c-0.133,0.627-0.535,1.051-0.535,1.051 s-0.309,0.725-0.721,1.135c-0.316,0.311-0.773,0.34-0.773,0.34s-0.729,0.615-0.729,0.67c0,0.057,0.078,0.092,0.027,0.221 c-0.055,0.139-0.004,0.154,0.133,0.24c0.281,0.172,0.109,0.316,0.109,0.426c0,0.107,0.367,0.727,0.633,1.48 c0.262,0.754,0.766,1.967,0.916,2.354c0.141,0.381,0.562,1.834,0.633,2.098c0.064,0.27,1.271,3.492,1.518,4.42 c0.252,0.926,0.914,3.254,0.99,3.535c0.082,0.273,0.451,1.117,0.545,1.9c0.094,0.785-0.012,1.23-0.238,1.986 c-0.225,0.754-0.633,1.875-0.699,2.363c-0.059,0.426-0.016,0.941-0.055,1.035c-0.039,0.09-0.279,0.488-0.344,1.4 c-0.064,0.914-0.041,1.705,0.053,2.145c0.094,0.436,0.211,1.031,0.264,1.932c0.064,1.057,0.105,1.625,0.172,1.93 c0.039,0.184,0.223,0.715-0.131,0.598c-0.275-0.094-0.305,0.076-0.422,0.158c-0.123,0.076-0.584,0.369-0.809,0.475 c-0.223,0.105-0.305,0.158-0.305,0.158s0.014,0.783,0.076,1.322c0.066,0.541,0.281,0.91,0.533,1.045 c0.246,0.135,1.506,0.715,1.834,0.689c0.873-0.08,1.02,0.207,1.02,0.207s0.41,0,0.609,0.135c0.195,0.129,0.711,0.305,1.014,0.385 c0.305,0.078,0.293,0.236,0.293,0.236s0.223,0.025,0.422,0.064c0.199,0.041,0.252,0.252,0.252,0.252s0.475-0.041,0.488,0.41 c0.012,0.447-0.494,0.764-1.068,0.701c-0.689-0.08-1.482,0.199-1.934,0.188c-0.211-0.01-1.279-0.268-2.537-0.32 c-1.254-0.053-1.705,0.252-2.314,0.516c-0.609,0.27-1.863,0.516-2.271-0.697c-0.23-0.689-0.061-1.197,0.115-1.746 c0.131-0.428,0.268-0.994,0.256-1.418c-0.027-0.855-0.209-1.412-0.209-1.412s-0.678-0.172-0.797-0.199 c-0.316-0.066-0.961,0.074-1.125,0.078c-0.346,0.016-0.846,0.105-1.189,0.068c-0.346-0.041-1.389-0.08-1.613-0.08 c-0.223,0-0.818,0.186-0.938,0.238c-0.121,0.053-0.359,0.264-0.809,0.223s-1.297,0.029-1.648,0.105 c-0.195,0.043-0.16,0.076-0.398,0.135c-0.234,0.049-0.438,0.223-0.438,0.223s0.215,0.305,0.252,1.217 c0.033,0.811,0.4,2.008,0.463,2.945c0.055,0.781,0.312,1.234,0.385,1.363c0.143,0.266,0.213,1.242,0.291,1.797 c0.078,0.559,0.012,1.102-0.582,1.139c-0.594,0.041-0.676-0.727-0.633-0.855c0.039-0.139-0.039-0.492-0.039-0.609 c0-0.123-0.16,0.17-0.174,0.34c-0.012,0.176,0.012,0.33,0.012,0.479c0,0.145,0.197,0.898-0.307,0.951 c-0.5,0.053-0.555-0.387-0.527-0.479c0.027-0.09-0.117,0.254-0.477,0.121c-0.359-0.135-0.25-0.688-0.238-0.836 c0.012-0.143-0.145-0.436-0.121-0.553c0.029-0.117-0.119,0.357-0.119,0.357c0.08,0.41-0.062,0.723-0.422,0.621 c-0.357-0.111-0.318-0.428-0.318-0.428c-0.318,0.094-0.477-0.236-0.516-0.658c-0.039-0.426-0.066-0.912,0.039-1.352 c0.105-0.434,0.305-0.896,0.445-1.33c0.148-0.439,0.098-0.533,0.098-0.996s0.236-0.873,0.236-0.873s-0.092-0.449-0.17-0.715 c-0.08-0.264-0.221-0.393-0.199-0.873c0.027-0.588-0.119-1.092-0.119-1.092s-0.621,0.238-0.646-0.117 c-0.025-0.359,0.012-1.367,0.012-1.367s-0.541-1.32-0.582-1.254c-0.037,0.062,0.121,1.098,0.012,2.012 c-0.104,0.916-0.092,1.016-0.197,1.004c-0.105-0.016-0.158-0.088-0.24-0.109c-0.275-0.061-0.195-0.285-0.195-0.285 s-0.449-0.285-0.541-0.531c-0.094-0.258-0.148-0.463-0.148-0.463s-0.252,0.064-0.492,0.092c-0.205,0.016-0.383,0.012-0.621-0.145 c-0.5-0.332-0.646-0.521-0.607-0.605c0.039-0.094,0.012-0.23-0.039-0.309c-0.055-0.082,0.248-0.533,0.264-0.676 c0.012-0.15,0.057-0.414,0.186-0.701c0.197-0.451,0.197-0.914,0.211-1.031c0.012-0.119,0.092-0.557,0.133-0.674 c0.037-0.123,0.037-0.676,0.119-1.02c0.078-0.34,0.049-1.215,0.025-1.693c-0.025-0.475-0.186-1.506-0.25-1.875 c-0.066-0.373-0.305-0.609-0.305-0.744c0-0.293,0.117-1.33,0.133-2.42c0.012-1.084,0.078-2.209-0.066-3.436 c-0.146-1.229-0.5-3.293-0.699-4.686c-0.197-1.383-0.357-2.471-0.688-3.697c-0.176-0.66-0.338-1.746-0.443-2.619 c-0.076-0.639-0.131-1.172-0.137-1.6c-0.006-0.492,0.088-1.055,0.201-1.734c0.119-0.721,0.238-1.471,0.287-1.734 c0.092-0.498,0.357-1.223,0.555-2.453c0.174-1.068,0.174-1.537,0.307-1.971c0.131-0.434,0.316-0.74,0.316-0.74 c-0.066-0.383,0.051-0.488,0.051-0.488s-2.207-3.438-2.656-4.205c-0.451-0.768-0.566-1.008-0.676-1.967 c-0.105-0.967-0.094-0.967-0.381-2.223c-0.287-1.258-0.357-4.215-0.477-5.475c-0.121-1.254-0.225-2.693,0.225-3.916 c0.449-1.215,1.18-3.209,1.879-3.779c0.701-0.566,1.73-0.703,1.73-0.703c0.133-0.143,0.859-0.305,0.98-0.326 c0.121-0.029,1.109-0.398,2.125-1.18c1.02-0.779,1.479-1.623,1.479-1.623C43.23,71.869,43.395,70.904,43.395,70.904";

		return Pablo.path({
			  class: 'mother',
				d: pathString,
				fill: fill,
				transform: 'translate('+ (x - 30) + ',' + (y - 55) +')'
		});
});

Pablo.template('country', function(options){
	  var config = Pablo.extend({x: 0, y: 0, fill: '#92278F'}, options);
		var x = config.x,
				y = config.y,
				fill = config.fill,
				points = "73.622,286.863 75.474,290.301 75.474,293.342 76.134,294.268 76.794,296.383 75.208,297.703 73.622,299.555 73.622,302.992 70.979,304.973 70.979,307.883 68.069,311.449 64.37,319.117 61.989,319.117 60.007,318.062 57.495,318.326 55.513,320.574 53.397,321.363 53.397,325.332 50.489,329.031 45.335,329.031 44.673,329.629 41.632,329.629 39.253,328.105 39.253,326.125 36.741,325.463 35.685,323.611 31.72,320.836 25.771,320.969 25.771,318.854 25.771,318.062 25.771,314.623 25.771,312.707 26.563,310.264 27.886,308.811 28.679,305.635 30.265,304.844 30.794,298.363 29.472,297.174 33.042,290.436 33.042,289.51 35.817,288.186 41.632,288.186 43.218,289.906 44.999,291.361 46.452,290.436 49.749,290.359 52.003,292.814 55.573,292.943 58.612,290.301 61.329,289.961 62.315,290.828 66.677,290.699";

		return Pablo.polygon({
			  class: 'country',
				points: points,
				fill: fill,
				'stroke-linejoin':'round',
				'stroke-linecap':'round',
				transform: 'translate('+ (x - 20) + ',' + (y - 285) +')'
		});
});

Pablo.template('district', function(options){
	  var config = Pablo.extend({x: 0, y: 0, fill: '#92278F', background: '#FFFFFF'}, options);
		var x = config.x,
				y = config.y,
				fill = config.fill,
				background = config.background;


		return Pablo.g({class: 'district'})
				.append('rect', {fill: '#92278F', x: '34.273', y: '270.052', width: '34.017', height: '21.148'})
				.append('path', {fill: '#92278F', d: "M58.445,271.009c0,1.809-1.466,3.273-3.273,3.273h-7.776c-1.808,0-3.273-1.463-3.273-3.273v-6.822 c0-1.807,1.466-3.273,3.273-3.273h7.776c1.808,0,3.273,1.463,3.273,3.273V271.009z"})
				.append('path', {fill: background, d: "M50.074,264.265h1.596v2.41h2.409v1.576h-2.409v2.416h-1.596v-2.416h-2.409v-1.576h2.409V264.265z"})
				.append('rect', {fill: background, x: '44.744', y: '287.185', width: '12.823', height: '4.57'})
				.append('rect', {fill: background, x: "38.005", y: "272.86", width: "4.348", height: "2.926"})
				.append('rect', {fill: background, x: "45.363", y: "272.86", width: "4.347", height: "2.926"})
				.append('rect', {fill: background, x: "52.593", y: "272.86", width: "4.346", height: "2.926"})
				.append('rect', {fill: background, x: "59.961", y: "272.86", width: "4.346", height: "2.926"})
				.append('rect', {fill: background, x: "38.005", y: "277.159", width: "4.348", height: "2.922"})
				.append('rect', {fill: background, x: "45.363", y: "277.159", width: "4.347", height: "2.922"})
				.append('rect', {fill: background, x: "52.593", y: "277.159", width: "4.346", height: "2.922"})
				.append('rect', {fill: background, x: "59.961", y: "277.159", width: "4.346", height: "2.922"})
				.append('rect', {fill: background, x: "38.005", y: "281.446", width: "4.348", height: "2.926"})
				.append('rect', {fill: background, x: "45.363", y: "281.446", width: "4.347", height: "2.926"})
				.append('rect', {fill: background, x: "52.593", y: "281.446", width: "4.346", height: "2.926"})
				.append('rect', {fill: background, x: "59.961", y: "281.446", width: "4.346", height: "2.926"})
				.transform('translate', (x - 30) + ' ' + (y - 255))
});

Pablo.template('clinic', function(options){
	  var config = Pablo.extend({x: 0, y: 0, fill: '#92278F', background: '#FFFFFF'}, options);
		var x = config.x,
				y = config.y,
				fill = config.fill,
				background = config.background,
				pathString = "M54.69,241.827v-4.932h2.767c1.149,0,1.348,0.756,1.489,0.9c0.429,0.418,0.719,0.664,1.326,0.664h3.066 v-6.791h-3.066c-0.607,0-0.897-0.25-1.326-0.672c-0.142-0.127-0.34-0.893-1.489-0.893H53.23v10.785l-1.932-1.262L34.274,250.62 h3.99v13.281h9.666v-10.549h6.714v10.549h9.668V250.62h3.977L54.69,241.827z";
				plusString = "M50.073,243.365h1.595v2.409h2.41v1.576h-2.41v2.416h-1.595v-2.416h-2.41v-1.576h2.41V243.365z"

		return Pablo.g({class: 'clinic'})
				.append('path', {d: pathString, fill: fill})
				.append('path', {d: plusString, fill: background})
				.transform('translate', (x - 30) + ' ' + (y - 255))
});

Pablo.template('phone', function(options){
	  var config = Pablo.extend({x: 0, y: 0, fill: '#92278F', background: '#FFFFFF'}, options);
		var x = config.x,
				y = config.y,
				fill = config.fill,
				background = config.background;

		return Pablo.g({class: 'phone'})
				.append('path', {fill: fill, d: "M50,342.329c0,0,4.684,0.484,8.409,2.497c0.513,0.438,0.758,1.207,0.758,1.207s0.094,1.146-0.117,2.269 c-0.21,1.12-2.84,10.526-3.438,11.793c-0.604,1.264-3.616,10.2-4.496,11.143c-0.887,0.943-1.207,0.996-1.599,1.02 c-0.394,0.029-6.857-1.492-7.754-2.514s-0.831-1.348-0.789-1.598c0.047-0.258,2.25-10.373,2.904-12.273 c0.659-1.904,3.794-11.441,4.683-12.549C49.354,342.332,49.612,342.285,50,342.329"})
				.append('path', {fill: background, d: "M54.392,357.554c-0.09,0.272-0.387,0.426-0.659,0.334l-7.116-2.308c-0.274-0.09-0.427-0.386-0.336-0.658 l1.429-4.887c0.09-0.272,0.389-0.422,0.66-0.338l7.394,2.399c0.276,0.084,0.424,0.383,0.335,0.656L54.392,357.554z"})
				.append('path', {fill: background, d: "M49.42,363.233c-0.118,0.371-0.77,0.492-1.446,0.271c-0.682-0.219-1.137-0.699-1.014-1.07 c0.115-0.371,0.768-0.494,1.447-0.27C49.089,362.388,49.543,362.867,49.42,363.233"})
				.append('path', {fill: background, d: "M53.207,363.724c-0.051,0.387-0.663,0.631-1.373,0.545c-0.711-0.09-1.248-0.474-1.198-0.857 c0.048-0.387,0.657-0.627,1.369-0.543C52.72,362.955,53.254,363.34,53.207,363.724"})
				.append('path', {fill: background, d: "M52.491,365.688c-0.05,0.387-0.657,0.633-1.372,0.545c-0.708-0.084-1.247-0.474-1.2-0.855 c0.048-0.393,0.659-0.629,1.371-0.545C52.001,364.92,52.539,365.304,52.491,365.688"})
				.append('path', {fill: background, d: "M51.695,367.679c-0.052,0.387-0.662,0.629-1.371,0.543c-0.712-0.089-1.252-0.474-1.201-0.855 c0.047-0.387,0.659-0.629,1.371-0.541C51.202,366.903,51.739,367.289,51.695,367.679"})
				.append('path', {fill: background, d: "M50.825,369.642c-0.047,0.387-0.661,0.631-1.371,0.541c-0.71-0.086-1.245-0.466-1.201-0.854 c0.05-0.386,0.664-0.627,1.372-0.541C50.335,368.873,50.873,369.26,50.825,369.642"})
				.append('path', {fill: background, d: "M43.614,360.615c-0.184,0.338,0.169,0.896,0.794,1.241c0.625,0.349,1.285,0.351,1.472,0.013 c0.191-0.343-0.162-0.897-0.789-1.242C44.466,360.274,43.804,360.272,43.614,360.615"})
				.append('path', {fill: background, d: "M43.04,362.625c-0.185,0.34,0.17,0.897,0.791,1.242c0.627,0.352,1.287,0.354,1.474,0.014 c0.192-0.336-0.161-0.897-0.788-1.246C43.891,362.291,43.227,362.285,43.04,362.625"})
				.append('path', {fill: background, d: "M42.52,364.703c-0.187,0.34,0.167,0.896,0.793,1.241c0.628,0.349,1.287,0.355,1.477,0.013 c0.188-0.338-0.167-0.896-0.794-1.242C43.371,364.367,42.709,364.362,42.52,364.703"})
				.append('path', {fill: background, d: "M42.07,366.804c-0.189,0.342,0.165,0.896,0.788,1.239c0.631,0.353,1.29,0.356,1.479,0.015 c0.188-0.341-0.165-0.896-0.79-1.244C42.919,366.467,42.259,366.461,42.07,366.804"})
				.append('path', {fill: background, d: "M48.765,365.265c-0.118,0.37-0.769,0.495-1.452,0.274c-0.681-0.224-1.135-0.699-1.017-1.07 c0.123-0.366,0.771-0.489,1.453-0.274C48.43,364.416,48.882,364.896,48.765,365.265"})
				.append('path', {fill: background, d: "M48.105,367.304c-0.121,0.364-0.768,0.485-1.448,0.264c-0.683-0.217-1.135-0.697-1.017-1.068 c0.119-0.367,0.77-0.492,1.451-0.271C47.767,366.449,48.222,366.931,48.105,367.304"})
				.append('path', {fill: background, d: "M47.446,369.332c-0.121,0.369-0.768,0.489-1.45,0.271c-0.681-0.22-1.138-0.703-1.015-1.072 c0.118-0.365,0.767-0.49,1.448-0.268C47.11,368.481,47.567,368.963,47.446,369.332"})
				.append('path', {fill: background, d: "M51.974,359.416c-0.15,0.465-1.354,0.494-2.693,0.058c-1.338-0.429-2.302-1.16-2.151-1.625 c0.154-0.47,1.357-0.494,2.7-0.058C51.162,358.224,52.127,358.951,51.974,359.416"})
				.append('path', {fill: background, d: "M53.839,346.123c-0.331,1.026-0.695,1.83-0.807,1.795c-0.109-0.041,0.066-0.903,0.4-1.929 c0.333-1.026,0.696-1.827,0.807-1.797C54.35,344.231,54.174,345.094,53.839,346.123"})
				.append('path', {fill: background, d: "M44.963,357.481c0,0-0.199,0.177-0.115,0.345c0.094,0.174,0.709,1.812,0.996,1.948 c0.319,0.06,1.332-0.473,1.116-0.641c-0.373-0.289-0.985-1.381-1.119-1.707C45.606,357.408,44.963,357.481,44.963,357.481"})
				.append('path', {fill: background, d: "M53.907,360.381c0,0,0.061,0.265-0.112,0.349c-0.174,0.088-1.63,1.049-1.947,0.992 c-0.289-0.142-0.802-1.162-0.528-1.175c0.474-0.014,1.608-0.537,1.91-0.723C53.427,359.938,53.907,360.381,53.907,360.381"})
				.transform('translate', (x - 35) + ' ' + (y - 340))
});

Pablo.template('chw', function(options){
	  var config = Pablo.extend({x: 0, y: 0, fill: '#92278F', background: '#FFFFFF'}, options);
		var x = config.x,
				y = config.y,
				fill = config.fill,
				background = config.background,
				pathString1 = "M56.285,233.783c-0.053-0.479-0.418-2.414-0.534-2.844c-0.116-0.428-0.71-5.109-0.7-5.632 s-0.408-5.004-0.408-5.004l0.178-0.097c0,0,0.221-0.094,0.272-0.123c0.052-0.032,0.21-0.166,0.23-0.229 c0.021-0.064,0.323-0.2,0.323-0.2l0.376-0.722c0,0,0.074-0.094,0.114-0.124c0.042-0.032,0.136-0.072,0.168-0.124 c0.032-0.05,0.01-0.032,0.032-0.094c0.021-0.062,0.104-0.418,0.094-0.574c-0.01-0.158-0.146-0.47-0.188-0.576 c-0.042-0.104-0.011-0.668-0.011-0.668l0.44,0.01c0,0-0.094-5.414-0.116-6.655c-0.021-1.244-0.355-2.958-0.542-4.66 c-0.189-1.704-0.888-4.578-1.065-4.984c-0.179-0.41-1.118-0.899-1.202-0.962s-0.292-0.104-0.438-0.134 c-0.147-0.032-0.21-0.062-0.271-0.074c-0.064-0.01-0.022-0.032-0.022-0.074s0.094-0.071,0.146-0.104 c0.052-0.032,0.115-0.166,0.115-0.166l0.011-0.376c0,0-0.45-0.032-0.513-0.022c-0.062,0.013-0.126,0.05-0.126,0.05 s-0.292-0.094-0.344-0.134c-0.052-0.042-0.084-0.134-0.136-0.178c-0.052-0.042-0.062-0.05-0.124-0.062 c-0.062-0.011-0.858,0-0.858,0s0.01-0.721,0.01-0.681l0.062-0.01c0,0,0.074-0.022,0.116-0.042 c0.042-0.022,0.146-0.062,0.208-0.106c0.062-0.042,0.271-0.136,0.323-0.188c0.053-0.05,0.085-0.084,0.114-0.179 c0.032-0.096,0.084-0.157,0.084-0.207c0-0.053,0.116-0.137,0.137-0.219c0.02-0.084,0.136-0.136,0.208-0.18 c0.073-0.042,0.146-0.104,0.146-0.104s0.166-0.084,0.208-0.125s0.45-0.596,0.48-0.638c0.031-0.042-0.07-0.082,0.077-0.144 c0.148-0.062,0.074-0.096,0.124-0.178c0.053-0.084,0.042-0.064,0.126-0.284c0.084-0.221-0.01-0.156-0.02-0.218 c-0.01-0.062,0.08-0.116,0.006-0.156c-0.072-0.042-0.178-0.094-0.229-0.137c-0.053-0.041-0.25-1.128-0.322-1.201 c-0.074-0.072-0.334-0.292-0.43-0.44c-0.095-0.144-0.085-0.144-0.166-0.324c-0.084-0.178-0.084-0.146-0.24-0.355 c-0.156-0.208-0.074-0.042-0.302-0.156c-0.23-0.116-1.381-1.014-1.494-1.046c-0.116-0.032-0.188-0.02-0.282-0.02 s-0.262,0.02-0.334,0.041c-0.074,0.021-0.178,0.114-0.23,0.156c-0.052,0.042-0.355,0.145-0.355,0.145s-0.062-0.051-0.156-0.135 s-0.042-0.052-0.136-0.094s-0.597,0.208-1.139,0.68c-0.544,0.471-0.888,1.358-0.93,1.557c-0.042,0.2,0.062,1.41,0.072,1.484 c0.01,0.071-0.042,0.105-0.042,0.105s-0.021,0.061-0.104,0.208c-0.084,0.146-0.166,0.084-0.166,0.084s-0.094,0.178-0.126,0.262 c-0.029,0.084,0.011,0.179,0.022,0.218c0.012,0.041,0.063,0.097,0.063,0.097l0.124,0.082c0,0,0.032,0.168,0.032,0.21 c0,0.04-0.01,0.176,0.094,0.468c0.104,0.292,0.597,0.792,0.805,0.942c0.208,0.144,0.479,0.344,0.479,0.344 s-0.042,0.218-0.074,0.262c-0.031,0.042-0.104,0.062-0.165,0.208c-0.062,0.146-0.387,0.429-0.616,0.584 c-0.23,0.158-1.475,0.376-1.475,0.376s-0.458,0.034-0.741,0.072c-0.282,0.042-0.732,0.062-1.19,0.648 c-0.46,0.586-0.91,2.529-1.004,3.207c-0.094,0.681-0.188,3.774-0.198,4.232c-0.01,0.46-0.054,2.676-0.063,3.01 c-0.011,0.334,0.052,2.729,0.052,2.937c0,0.21,0.304,3.084,0.304,3.084l0.438-0.01c0,0,0.084,0.365,0.062,0.479 c-0.021,0.114,0.032,1.148,0.01,1.254c-0.02,0.106-0.208,0.721-0.229,0.982c-0.021,0.26-0.836,5.067-0.93,5.988 c-0.095,0.92,0.188,8.109,0.302,8.13c0.116,0.02,0.878,0.073,0.962,0.082c0.084,0.012,0.376-0.114,0.428-0.135 c0.052-0.021,0.24-1.338,0.24-1.338l0.084-0.02l0.22-0.064l0.314-0.042l0.388-0.052l0.48-0.124c0,0,0.021,0.346,0.084,0.71 c0.062,0.364,0.124,0.952,0.376,1.63c0.25,0.678,0.563,1.786,0.647,1.994s0.166,2.068,0.178,2.466 c0.011,0.396,0.042,1.652,0.021,1.818c-0.021,0.168-0.094,1.798-0.052,2.218c0.042,0.414,0.544,0.918,0.605,0.958 c0.064,0.042,1.517,0.104,1.704,0.052c0.188-0.052,0.292-0.512,0.292-0.512l0.094,0.02l0.061,0.23c0,0,0.122,0.098,0.174,0.168 c0.052,0.074,0.24,0.096,0.47,0.106c0.23,0.01,0.973,0.02,1.183-0.146s0.235-0.876,0.142-1.278 c-0.094-0.396-0.512-0.886-0.626-1.098c-0.116-0.208-0.732-1.754-0.868-2.006s-0.052-1.818,0.032-2.194 s0.626-2.246,0.814-2.624c0.189-0.376,0.439-2.111,0.439-2.111s0.178,0.042,0.208,0.084c0.032,0.042,0.094,0.054,0.094,0.054 s0.166,0.132,0.19,0.176c0.02,0.042,0.156,0.116,0.156,0.116s0.262,0.134,0.388,0.252c0.124,0.114,0.084,0.102,0.094,0.145 c0.01,0.041,0.042,0.168,0.062,0.281c0.02,0.118-0.011,0.064-0.021,0.18c-0.01,0.114,0,0.2,0,0.24s0.114,0.522,0.114,0.574 s-0.021,0.178-0.01,0.252c0.01,0.072,0.084,0.136,0.084,0.136s0.418,0.05,0.46,0.07c0.042,0.022,0.074,0.106,0.074,0.106 s0.062,0.123,0.062,0.25c0,0.126,0.01,0.094,0.01,0.094l0.188,0.336l0.042,0.082c0,0,0.208,0.021,0.26,0.034 c0.052,0.01,0.052,0.062,0.052,0.062s0.095,0.022,0.146,0.084c0.052,0.062,0.084,0.072,0.084,0.072s0.072,0.042,0.104,0.084 c0.032,0.042,0.137,0.062,0.137,0.062l0.042,0.05c0,0,0,0.084,0.01,0.126c0.012,0.042-0.03,0.115,0.042,0.334 c0.072,0.218,0.156,0.304,0.156,0.304s0.124,0.021,0.271,0.04c0.146,0.021,0.136,0.074,0.22,0.136 c0.084,0.062,0.124,0.042,0.124,0.042l0.022,0.062l0.146,0.031c0,0,0.146,0,0.221,0.009c0.071,0.012,0.104,0.036,0.166,0.042 c0.062,0.012,0.029,0.012,0.062,0.062c0.032,0.052,0.032,0.136,0.072,0.252c0.042,0.116,0.178,0.208,0.22,0.252 c0.042,0.042,0.084,0.032,0.178-0.062c0.095-0.096,0.116-0.21,0.126-0.262c0.009-0.055,0.021-0.211,0.009-0.336 C56.524,236.709,56.336,234.264,56.285,233.783z M45.192,209.222c0,0-0.14-1.254-0.14-1.59c0-0.332-0.056-0.836,0-1.03 c0.056-0.198,0.306-0.556,0.306-0.556s0.307,0.945,0.334,1.226c0.028,0.278,0.223,0.612,0.139,0.864 C45.749,208.386,45.192,209.222,45.192,209.222z M48.852,236.02c-0.032,0.408,0.01,0.72-0.094,0.92 c-0.104,0.2-0.23,0.312-0.292,0.262c0,0-0.124-0.731-0.166-1.014c-0.042-0.284,0.02-1.036,0.052-1.212 c0.032-0.178,0.188-0.786,0.263-0.71c0.071,0.074,0.136,0.366,0.155,0.574C48.791,235.048,48.884,235.611,48.852,236.02z",
				pathString2 = "M42.26,238.195l1.544,0.788l2.046,0.408c0,0,2.515,0.252,3.006,0.231c0.492-0.02,2.964-0.231,2.964-0.231 s2.624-0.126,3.223-0.478c0.598-0.356,1.048-1.188,1.048-1.188l0.43-0.554l-3.651-11.353l-10.534,3.3L42.26,238.195z";

		return Pablo.g({class: 'chw'})
				.append('path', {d: pathString1, fill: fill})
				.append('path', {d: pathString2, fill: fill})
				.append('path', {fill: fill, d: "M57.172,208.291c0,0,1.594,0.166,2.864,0.853c0.174,0.147,0.258,0.41,0.258,0.41s0.032,0.39-0.04,0.773 c-0.072,0.382-0.968,3.586-1.172,4.017c-0.206,0.43-1.232,3.472-1.53,3.794c-0.302,0.319-0.412,0.338-0.544,0.346 c-0.134,0.012-2.334-0.508-2.64-0.856c-0.305-0.348-0.282-0.457-0.269-0.541c0.017-0.091,0.767-3.534,0.99-4.181 c0.224-0.647,1.292-3.896,1.594-4.273C56.953,208.296,57.041,208.277,57.172,208.291"})
				.append('path', {fill: background, d: "M58.668,213.478c-0.03,0.092-0.132,0.144-0.225,0.114l-2.424-0.786c-0.092-0.032-0.144-0.13-0.113-0.224 l0.485-1.664c0.032-0.095,0.132-0.145,0.227-0.114l2.518,0.815c0.094,0.028,0.144,0.129,0.114,0.223L58.668,213.478z"})
				.append('path', {fill: background, d: "M56.974,215.411c-0.04,0.124-0.262,0.166-0.492,0.091c-0.231-0.074-0.388-0.236-0.346-0.364 c0.04-0.124,0.262-0.168,0.494-0.092C56.862,215.123,57.016,215.287,56.974,215.411"})
				.append('path', {fill: background, d: "M58.264,215.575c-0.018,0.132-0.226,0.214-0.468,0.188c-0.242-0.032-0.424-0.162-0.408-0.292 c0.016-0.132,0.224-0.212,0.466-0.185C58.096,215.315,58.28,215.447,58.264,215.575"})
				.append('path', {fill: background, d: "M58.02,216.245c-0.016,0.13-0.224,0.217-0.466,0.187c-0.242-0.028-0.424-0.16-0.41-0.292 c0.017-0.134,0.225-0.212,0.466-0.187C57.852,215.985,58.037,216.115,58.02,216.245"})
				.append('path', {fill: background, d: "M57.75,216.924c-0.019,0.132-0.227,0.214-0.466,0.186c-0.242-0.029-0.427-0.162-0.41-0.292 c0.016-0.132,0.224-0.214,0.466-0.184C57.583,216.661,57.764,216.791,57.75,216.924"})
				.append('path', {fill: background, d: "M57.453,217.592c-0.017,0.132-0.227,0.214-0.467,0.184c-0.241-0.027-0.424-0.156-0.409-0.29 c0.018-0.13,0.226-0.212,0.468-0.184S57.468,217.464,57.453,217.592"})
				.append('path', {fill: background, d: "M54.999,214.518c-0.062,0.118,0.058,0.306,0.27,0.426c0.212,0.118,0.438,0.118,0.5,0.004 c0.066-0.118-0.056-0.308-0.268-0.424C55.289,214.403,55.062,214.401,54.999,214.518"})
				.append('path', {fill: background, d: "M54.802,215.205c-0.062,0.114,0.058,0.305,0.27,0.422c0.215,0.121,0.438,0.123,0.503,0.005 c0.065-0.114-0.055-0.305-0.269-0.425C55.092,215.09,54.867,215.088,54.802,215.205"})
				.append('path', {fill: background, d: "M54.625,215.911c-0.064,0.114,0.056,0.305,0.27,0.423c0.212,0.119,0.438,0.121,0.502,0.004 c0.064-0.116-0.058-0.305-0.27-0.422C54.915,215.798,54.688,215.796,54.625,215.911"})
				.append('path', {fill: background, d: "M54.47,216.627c-0.063,0.118,0.056,0.305,0.268,0.423c0.215,0.12,0.44,0.122,0.505,0.004 c0.063-0.116-0.057-0.304-0.271-0.424C54.76,216.512,54.537,216.51,54.47,216.627"})
				.append('path', {fill: background, d: "M56.752,216.102c-0.04,0.126-0.262,0.17-0.496,0.096c-0.232-0.078-0.386-0.238-0.346-0.365 c0.042-0.125,0.262-0.166,0.493-0.095C56.636,215.813,56.792,215.978,56.752,216.102"})
				.append('path', {fill: background, d: "M56.526,216.796c-0.042,0.124-0.26,0.168-0.493,0.092c-0.232-0.074-0.387-0.236-0.347-0.366 c0.04-0.124,0.263-0.166,0.494-0.09C56.413,216.506,56.566,216.67,56.526,216.796"})
				.append('path', {fill: background, d: "M56.302,217.487c-0.042,0.124-0.262,0.166-0.494,0.093c-0.231-0.074-0.388-0.24-0.346-0.368 c0.04-0.124,0.26-0.166,0.492-0.091C56.188,217.197,56.342,217.361,56.302,217.487"})
				.append('path', {fill: background, d: "M57.844,214.111c-0.052,0.158-0.462,0.168-0.916,0.021c-0.456-0.146-0.784-0.395-0.732-0.555 c0.053-0.159,0.463-0.168,0.919-0.02C57.568,213.705,57.896,213.951,57.844,214.111"})
				.append('path', {fill: background, d: "M58.478,209.584c-0.111,0.35-0.235,0.623-0.273,0.611c-0.038-0.014,0.021-0.308,0.136-0.656 c0.114-0.35,0.238-0.623,0.276-0.611C58.652,208.939,58.594,209.231,58.478,209.584"})
				.append('path', {fill: background, d: "M55.457,213.451c0,0-0.068,0.061-0.04,0.118c0.032,0.061,0.242,0.618,0.338,0.664 c0.11,0.022,0.454-0.16,0.38-0.216c-0.126-0.1-0.334-0.47-0.38-0.582C55.676,213.428,55.457,213.451,55.457,213.451"})
				.append('path', {fill: background, d: "M58.502,214.439c0,0,0.02,0.09-0.038,0.118c-0.061,0.032-0.554,0.36-0.664,0.34 c-0.098-0.048-0.274-0.396-0.18-0.399c0.162-0.007,0.548-0.185,0.649-0.246C58.34,214.289,58.502,214.439,58.502,214.439"})

				.transform('translate', (x - 35) + ' ' + (y - 185))
});
