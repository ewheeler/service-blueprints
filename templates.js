
Pablo.template('child', function(options){
	  var config = Pablo.extend({x: 0, y: 0, fill: '#00AEEF', scale: 1}, options);
		var x = config.x,
				y = config.y,
				fill = config.fill,
				scale = (1.2 / 1) * (config.scale / 1),
				pathString = "M13.542,5.744c-0.43,1.393,0.062,3.291,0.267,5.028c0.332,0.345,0.865,0.296,1.506,0.042 c0.468,1.717,2.914,1.866,4.08,2.799c1.632,1.309,1.651,3.182,3.432,4.796c-0.516,1.656,0.475,3.512-0.716,5.089 c0.958,1.419,0.386,3.381-0.994,4.151c3.13,2.207,5.446,8.136,5.958,13.211c-1.012,0.354-1.956,0.588-2.646,0.322 c0.172,3.913,1.453,9.097-4.318,8.017c-0.769-0.867-0.958-2.43-0.458-3.182c-0.811,0.145-1.248,0.493-1.75,0.812 c-1.254-1.14-2.82-1.67-3.764-3.413c-0.555,0.209-1.084,0.381-1.437,0.196c-0.271-0.209-0.488-0.529-0.578-1.094 c-3.54,0.593-4.42-3.982-6.405-6.414c0.443-2.283-0.242-3.245-0.32-6.037c-0.744,0.906-2.696,0.199-3.99-0.015 c-0.182-1.865,0.074-3.072-1.174-4.749c0.189-0.677,0.75-1.154,0.944-1.831c-3.358-3.813,1.262-7.758,3.913-10.196 c-0.743-1.628-2.094-2.093-3.008-3.393C1.706,8.929,2.776,9.482,3.15,9.289c-7.393-8.793,9.308-15.114,9.504-4.029 C12.545,6.201,13.463,5.155,13.542,5.744 M15.711,40.357c1.106,0.197,1.496,1.783,3.064,1.08c-0.937-2.091-2.63-4.555-2.856-7.028 C14.751,35.795,17.11,39.1,15.711,40.357";

		return Pablo.path({
			  class: 'icon-component',
				d: pathString,
				fill: fill,
		}).transform('scale', scale)
			.transform('translate', (x + 10) + ' ' + (y + 5));
});

Pablo.template('mother', function(options){
	  var config = Pablo.extend({x: 0, y: 0, fill: '#39B54A', scale: 1}, options);
		var x = config.x,
				y = config.y,
				fill = config.fill,
				scale = (1.8 / 1) * (config.scale / 1),
				pathString = "M2.274,17.539c0.174,0.31,0.348,0.682,0.384,0.754c0.064,0.122,0.107-0.296,0.142-0.404 c0.035-0.11,0.136-0.296,0.071-0.477s-0.198-0.827-0.267-0.939c-0.071-0.117-0.122-0.664-0.122-0.664s-0.083-0.042-0.09-0.143 c-0.007-0.103-0.099-0.353-0.099-0.353s-0.058,0.36-0.142,0.843c-0.085,0.479-0.143,0.971-0.143,0.971S2.152,17.32,2.274,17.539 M11.641,24.255c0,0,0.139,0.053,0.357-0.165c0.219-0.218,0.271-0.356,0.271-0.356L11.641,24.255z M3.967,5.597 c0,0-0.213-0.293-0.113-0.828c0.099-0.531,0.609-2.013,0.609-2.013S4.508,2.41,4.59,2.133c0.069-0.236,0.177-0.406,0.177-0.406 S4.644,1.582,4.654,1.376c0.007-0.152,0.143-0.367,0.17-0.409c0.064-0.102,0.101-0.151,0.113-0.301s0.205-0.202,0.226-0.288 c0.023-0.086,0.128-0.158,0.184-0.173c0.058-0.016,0.071-0.114,0.127-0.13C5.53,0.06,5.788,0.009,5.841-0.005 C5.896-0.022,5.934-0.053,5.994-0.1c0.061-0.047-0.06-0.032-0.177-0.023c-0.114,0.007-0.29-0.086-0.121-0.123 C5.864-0.285,6.07-0.34,6.01-0.379C5.949-0.418,5.505-0.425,5.956-0.798c0.051-0.041,0.366-0.368,0.642-0.404 C6.874-1.24,7.186-1.022,7.341-1c0.153,0.023,0.153-0.148,0.406-0.093C7.999-1.041,8.656-0.605,8.878-0.4 C9.1-0.2,9.224-0.012,9.224-0.012S9.459-0.021,9.521,0.12C9.583,0.259,9.62,0.385,9.673,0.449c0.054,0.061,0.229,0.66,0.229,0.66 c0.177,0.219,0.207,0.419,0.207,0.419s0.139,0.363,0.146,0.468c0.007,0.1,0.083,0.18,0.13,0.372 c0.045,0.194-0.046,0.241-0.046,0.241c0.108,0.358-0.06,0.397-0.091,0.436c-0.031,0.037,0,0.242-0.107,0.436 c-0.108,0.192-0.198,0.148-0.198,0.148C9.819,4.14,9.545,4.304,9.545,4.304S9.401,4.7,9.277,4.947 C9.214,5.074,8.936,5.729,8.57,6.208c-0.175,0.23-0.288,0.37-0.46,0.51C7.922,6.87,7.677,7.013,7.594,7.048 c-0.321,0.132-0.445,0.193-0.49,0.274c-0.046,0.076-0.061,0.27-0.061,0.27s0.412,0.367,0.773,0.6 C8.176,8.425,8.29,8.479,8.328,8.449c0.038-0.032,0.429,0.085,0.489,0.093C8.88,8.549,8.994,8.58,8.994,8.58 c0.092,0.009,0.153,0.109,0.153,0.109s0.726,0.162,1.102,0.792c0.373,0.629,0.78,1.929,0.894,2.565 c0.115,0.638,0.292,1.949,0.521,2.767c0.229,0.816,0.588,1.608,0.772,2.347c0.185,0.739,0.391,1.269,0.367,2.254 c-0.023,0.99-0.115,2.176-0.069,2.53c0.021,0.158,0.106,0.574,0.04,0.882c-0.078,0.369-0.309,0.617-0.309,0.617 s-0.179,0.427-0.418,0.667c-0.184,0.184-0.446,0.199-0.446,0.199s-0.423,0.364-0.423,0.396s0.046,0.054,0.017,0.13 c-0.032,0.08-0.003,0.09,0.076,0.141c0.162,0.101,0.062,0.186,0.062,0.249s0.214,0.427,0.366,0.872 c0.152,0.443,0.444,1.157,0.53,1.383c0.083,0.225,0.326,1.08,0.366,1.235c0.038,0.157,0.736,2.053,0.88,2.598 c0.144,0.544,0.528,1.913,0.573,2.078c0.046,0.162,0.26,0.658,0.314,1.118c0.053,0.461-0.008,0.724-0.138,1.168 c-0.13,0.442-0.366,1.102-0.406,1.39c-0.033,0.25-0.007,0.553-0.031,0.607c-0.023,0.054-0.16,0.289-0.198,0.825 s-0.024,1.001,0.031,1.259c0.054,0.258,0.122,0.607,0.153,1.136c0.036,0.623,0.061,0.956,0.099,1.136 c0.022,0.108,0.128,0.418-0.077,0.352c-0.159-0.055-0.175,0.044-0.245,0.093c-0.069,0.044-0.336,0.217-0.467,0.279 c-0.13,0.061-0.177,0.093-0.177,0.093s0.009,0.459,0.046,0.776c0.038,0.319,0.161,0.537,0.307,0.616 c0.144,0.078,0.871,0.42,1.062,0.404c0.505-0.046,0.588,0.123,0.588,0.123s0.237,0,0.353,0.079c0.115,0.076,0.413,0.18,0.588,0.226 c0.175,0.045,0.168,0.139,0.168,0.139s0.13,0.016,0.244,0.039c0.114,0.022,0.146,0.146,0.146,0.146s0.275-0.023,0.283,0.241 c0.007,0.264-0.287,0.45-0.62,0.413c-0.397-0.047-0.857,0.117-1.118,0.11c-0.121-0.006-0.74-0.158-1.468-0.188 c-0.726-0.031-0.985,0.148-1.338,0.304c-0.352,0.157-1.077,0.303-1.313-0.411c-0.134-0.405-0.035-0.704,0.066-1.026 c0.076-0.251,0.154-0.584,0.147-0.833c-0.015-0.505-0.121-0.832-0.121-0.832s-0.391-0.102-0.46-0.117 c-0.184-0.04-0.557,0.043-0.651,0.046c-0.2,0.01-0.49,0.062-0.688,0.039c-0.2-0.024-0.803-0.045-0.934-0.045 c-0.13,0-0.474,0.109-0.543,0.14c-0.07,0.03-0.207,0.155-0.467,0.131c-0.26-0.025-0.75,0.017-0.954,0.061 C6.117,43.453,6.138,43.472,6,43.505c-0.136,0.03-0.253,0.131-0.253,0.131s0.124,0.18,0.146,0.715 c0.02,0.477,0.231,1.182,0.268,1.733c0.031,0.458,0.181,0.725,0.222,0.8c0.083,0.158,0.123,0.73,0.168,1.057 c0.045,0.328,0.007,0.647-0.337,0.67c-0.343,0.023-0.39-0.428-0.366-0.504c0.022-0.08-0.022-0.289-0.022-0.358 c0-0.07-0.092,0.102-0.101,0.202c-0.007,0.102,0.007,0.194,0.007,0.28c0,0.087,0.114,0.529-0.177,0.56 c-0.29,0.032-0.321-0.226-0.305-0.28c0.016-0.054-0.067,0.147-0.276,0.07c-0.207-0.079-0.144-0.404-0.137-0.491 c0.006-0.084-0.083-0.256-0.07-0.327c0.016-0.068-0.069,0.212-0.069,0.212c0.046,0.24-0.037,0.424-0.244,0.363 c-0.207-0.064-0.184-0.251-0.184-0.251c-0.185,0.055-0.276-0.14-0.299-0.387c-0.022-0.251-0.038-0.537,0.023-0.794 c0.061-0.256,0.177-0.527,0.258-0.783c0.085-0.258,0.056-0.313,0.056-0.584c0-0.272,0.136-0.514,0.136-0.514 s-0.053-0.264-0.098-0.419c-0.046-0.156-0.127-0.233-0.115-0.513c0.016-0.348-0.069-0.644-0.069-0.644s-0.359,0.141-0.374-0.069 c-0.015-0.21,0.007-0.803,0.007-0.803s-0.313-0.776-0.336-0.737c-0.022,0.037,0.069,0.645,0.007,1.182 c-0.061,0.539-0.054,0.598-0.115,0.591c-0.061-0.008-0.091-0.051-0.139-0.063c-0.16-0.036-0.113-0.169-0.113-0.169 s-0.26-0.166-0.313-0.312C2.731,42.918,2.7,42.797,2.7,42.797s-0.146,0.039-0.285,0.054c-0.119,0.01-0.222,0.007-0.359-0.085 c-0.29-0.194-0.375-0.305-0.352-0.355c0.022-0.056,0.007-0.135-0.022-0.181c-0.032-0.048,0.144-0.314,0.152-0.398 c0.007-0.087,0.033-0.242,0.107-0.412c0.115-0.264,0.115-0.538,0.122-0.606c0.007-0.071,0.054-0.329,0.076-0.397 c0.022-0.071,0.022-0.397,0.07-0.6c0.045-0.199,0.029-0.714,0.015-0.995c-0.015-0.279-0.107-0.885-0.146-1.102 C2.041,37.5,1.903,37.36,1.903,37.281c0-0.171,0.068-0.783,0.076-1.422c0.007-0.638,0.045-1.3-0.038-2.021 c-0.084-0.721-0.29-1.936-0.404-2.753C1.423,30.27,1.331,29.631,1.14,28.91c-0.103-0.388-0.196-1.026-0.257-1.54 c-0.045-0.375-0.076-0.689-0.08-0.94C0.8,26.139,0.855,25.81,0.919,25.409c0.07-0.422,0.139-0.865,0.167-1.018 c0.054-0.293,0.206-0.719,0.32-1.442c0.101-0.63,0.101-0.904,0.177-1.159c0.076-0.256,0.184-0.436,0.184-0.436 c-0.039-0.224,0.029-0.287,0.029-0.287s-1.277-2.021-1.537-2.472C0,18.143-0.067,18.002-0.13,17.438 c-0.061-0.568-0.054-0.568-0.22-1.307c-0.167-0.739-0.207-2.478-0.276-3.218c-0.069-0.738-0.129-1.584,0.131-2.303 c0.26-0.714,0.682-1.887,1.086-2.222c0.406-0.333,1.001-0.414,1.001-0.414C1.668,7.89,2.089,7.795,2.159,7.782 c0.069-0.018,0.642-0.234,1.229-0.693c0.59-0.458,0.856-0.954,0.856-0.954C3.872,6.165,3.967,5.597,3.967,5.597";

		return Pablo.path({
			  class: 'icon-component',
				d: pathString,
				fill: fill,
		}).transform('scale', scale)
			.transform('translate', (x + 5) + ' ' + (y - 8));
});

Pablo.template('country', function(options){
	  var config = Pablo.extend({x: 0, y: 0, fill: '#92278F', scale: 1}, options);
		var x = config.x,
				y = config.y,
				fill = config.fill,
				scale = config.scale,
				points = "56.061,0.049 58.23,4.069 58.23,7.624 59.003,8.708 59.776,11.18 57.918,12.723 56.061,14.889 56.061,18.907 52.965,21.223 52.965,24.625 49.556,28.794 45.223,37.759 42.434,37.759 40.112,36.525 37.169,36.834 34.848,39.462 32.369,40.384 32.369,45.025 28.962,49.35 22.925,49.35 22.149,50.049 18.587,50.049 15.8,48.266 15.8,45.952 12.858,45.178 11.621,43.012 6.977,39.769 0.007,39.923 0.007,37.452 0.007,36.525 0.007,32.505 0.007,30.265 0.935,27.41 2.485,25.71 3.414,21.996 5.272,21.072 5.891,13.494 4.343,12.104 8.525,4.228 8.525,3.145 11.775,1.597 18.587,1.597 20.445,3.608 22.531,5.308 24.233,4.228 28.096,4.136 30.736,7.006 34.918,7.157 38.478,4.069 41.661,3.671 42.815,4.686 47.925,4.535";

		return Pablo.polygon({
			  class: 'icon-component',
				points: points,
				fill: fill,
				'stroke-linejoin':'round',
				'stroke-linecap':'round',
		}).transform('scale', scale)
			.transform('translate', (x + 5) + ' ' + (y + 8));
});

Pablo.template('district', function(options){
	  var config = Pablo.extend({x: 0, y: 0, fill: '#92278F', background: '#FFFFFF', scale: 1}, options);
		var x = config.x,
				y = config.y,
				fill = config.fill,
				scale = (1.3 / 1) * (config.scale / 1),
				background = config.background;


		/* TODO rework paths so they start at origin, not +30x/+255y offset */
		return Pablo.g({class: 'icon-component'})
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
				.transform('scale', scale)
				.transform('translate', (x - 30) + ' ' + (y - 255))
});

Pablo.template('clinic', function(options){
	  var config = Pablo.extend({x: 0, y: 0, fill: '#92278F', background: '#FFFFFF', scale: 1}, options);
		var x = config.x,
				y = config.y,
				fill = config.fill,
				background = config.background,
				scale = (1.3 / 1) * (config.scale / 1),
				pathString = "M20.416,11.723V6.791h2.767c1.149,0,1.348,0.756,1.489,0.9c0.429,0.418,0.719,0.664,1.326,0.664h3.066 V1.564h-3.066c-0.607,0-0.897-0.25-1.326-0.672C24.53,0.766,24.332,0,23.183,0h-4.227v10.785l-1.932-1.262L0,20.516h3.99v13.281 h9.666V23.248h6.714v10.549h9.668V20.516h3.977L20.416,11.723z",
				plusString = "M15.799,13.261h1.595v2.409h2.41v1.576h-2.41v2.416h-1.595v-2.416h-2.41V15.67h2.41V13.261z";

		return Pablo.g({class: 'icon-component'})
				.append('path', {d: pathString, fill: fill})
				.append('path', {d: plusString, fill: background})
				.transform('scale', scale)
				.transform('translate', (x + 5) + ' ' + (y + 5))
});

Pablo.template('phone', function(options){
	  var config = Pablo.extend({x: 0, y: 0, fill: '#92278F', background: '#FFFFFF', scale: 1}, options);
		var x = config.x,
				y = config.y,
				fill = config.fill,
				scale = config.scale,
				background = config.background;

		/* TODO rework paths so they start at origin, not +35x/+340y offset */
		return Pablo.g({class: 'icon-component'})
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
				.transform('scale', scale)
				.transform('translate', (x - 35) + ' ' + (y - 340))
});

Pablo.template('chw', function(options){
	  var config = Pablo.extend({x: 0, y: 0, fill: '#92278F', background: '#FFFFFF', scale: 1}, options);
		var x = config.x,
				y = config.y,
				fill = config.fill,
				background = config.background,
				scale = (1.6 / 1) * (config.scale / 1),
				pathString1 = "M56.285,233.783c-0.053-0.479-0.418-2.414-0.534-2.844c-0.116-0.428-0.71-5.109-0.7-5.632 s-0.408-5.004-0.408-5.004l0.178-0.097c0,0,0.221-0.094,0.272-0.123c0.052-0.032,0.21-0.166,0.23-0.229 c0.021-0.064,0.323-0.2,0.323-0.2l0.376-0.722c0,0,0.074-0.094,0.114-0.124c0.042-0.032,0.136-0.072,0.168-0.124 c0.032-0.05,0.01-0.032,0.032-0.094c0.021-0.062,0.104-0.418,0.094-0.574c-0.01-0.158-0.146-0.47-0.188-0.576 c-0.042-0.104-0.011-0.668-0.011-0.668l0.44,0.01c0,0-0.094-5.414-0.116-6.655c-0.021-1.244-0.355-2.958-0.542-4.66 c-0.189-1.704-0.888-4.578-1.065-4.984c-0.179-0.41-1.118-0.899-1.202-0.962s-0.292-0.104-0.438-0.134 c-0.147-0.032-0.21-0.062-0.271-0.074c-0.064-0.01-0.022-0.032-0.022-0.074s0.094-0.071,0.146-0.104 c0.052-0.032,0.115-0.166,0.115-0.166l0.011-0.376c0,0-0.45-0.032-0.513-0.022c-0.062,0.013-0.126,0.05-0.126,0.05 s-0.292-0.094-0.344-0.134c-0.052-0.042-0.084-0.134-0.136-0.178c-0.052-0.042-0.062-0.05-0.124-0.062 c-0.062-0.011-0.858,0-0.858,0s0.01-0.721,0.01-0.681l0.062-0.01c0,0,0.074-0.022,0.116-0.042 c0.042-0.022,0.146-0.062,0.208-0.106c0.062-0.042,0.271-0.136,0.323-0.188c0.053-0.05,0.085-0.084,0.114-0.179 c0.032-0.096,0.084-0.157,0.084-0.207c0-0.053,0.116-0.137,0.137-0.219c0.02-0.084,0.136-0.136,0.208-0.18 c0.073-0.042,0.146-0.104,0.146-0.104s0.166-0.084,0.208-0.125s0.45-0.596,0.48-0.638c0.031-0.042-0.07-0.082,0.077-0.144 c0.148-0.062,0.074-0.096,0.124-0.178c0.053-0.084,0.042-0.064,0.126-0.284c0.084-0.221-0.01-0.156-0.02-0.218 c-0.01-0.062,0.08-0.116,0.006-0.156c-0.072-0.042-0.178-0.094-0.229-0.137c-0.053-0.041-0.25-1.128-0.322-1.201 c-0.074-0.072-0.334-0.292-0.43-0.44c-0.095-0.144-0.085-0.144-0.166-0.324c-0.084-0.178-0.084-0.146-0.24-0.355 c-0.156-0.208-0.074-0.042-0.302-0.156c-0.23-0.116-1.381-1.014-1.494-1.046c-0.116-0.032-0.188-0.02-0.282-0.02 s-0.262,0.02-0.334,0.041c-0.074,0.021-0.178,0.114-0.23,0.156c-0.052,0.042-0.355,0.145-0.355,0.145s-0.062-0.051-0.156-0.135 s-0.042-0.052-0.136-0.094s-0.597,0.208-1.139,0.68c-0.544,0.471-0.888,1.358-0.93,1.557c-0.042,0.2,0.062,1.41,0.072,1.484 c0.01,0.071-0.042,0.105-0.042,0.105s-0.021,0.061-0.104,0.208c-0.084,0.146-0.166,0.084-0.166,0.084s-0.094,0.178-0.126,0.262 c-0.029,0.084,0.011,0.179,0.022,0.218c0.012,0.041,0.063,0.097,0.063,0.097l0.124,0.082c0,0,0.032,0.168,0.032,0.21 c0,0.04-0.01,0.176,0.094,0.468c0.104,0.292,0.597,0.792,0.805,0.942c0.208,0.144,0.479,0.344,0.479,0.344 s-0.042,0.218-0.074,0.262c-0.031,0.042-0.104,0.062-0.165,0.208c-0.062,0.146-0.387,0.429-0.616,0.584 c-0.23,0.158-1.475,0.376-1.475,0.376s-0.458,0.034-0.741,0.072c-0.282,0.042-0.732,0.062-1.19,0.648 c-0.46,0.586-0.91,2.529-1.004,3.207c-0.094,0.681-0.188,3.774-0.198,4.232c-0.01,0.46-0.054,2.676-0.063,3.01 c-0.011,0.334,0.052,2.729,0.052,2.937c0,0.21,0.304,3.084,0.304,3.084l0.438-0.01c0,0,0.084,0.365,0.062,0.479 c-0.021,0.114,0.032,1.148,0.01,1.254c-0.02,0.106-0.208,0.721-0.229,0.982c-0.021,0.26-0.836,5.067-0.93,5.988 c-0.095,0.92,0.188,8.109,0.302,8.13c0.116,0.02,0.878,0.073,0.962,0.082c0.084,0.012,0.376-0.114,0.428-0.135 c0.052-0.021,0.24-1.338,0.24-1.338l0.084-0.02l0.22-0.064l0.314-0.042l0.388-0.052l0.48-0.124c0,0,0.021,0.346,0.084,0.71 c0.062,0.364,0.124,0.952,0.376,1.63c0.25,0.678,0.563,1.786,0.647,1.994s0.166,2.068,0.178,2.466 c0.011,0.396,0.042,1.652,0.021,1.818c-0.021,0.168-0.094,1.798-0.052,2.218c0.042,0.414,0.544,0.918,0.605,0.958 c0.064,0.042,1.517,0.104,1.704,0.052c0.188-0.052,0.292-0.512,0.292-0.512l0.094,0.02l0.061,0.23c0,0,0.122,0.098,0.174,0.168 c0.052,0.074,0.24,0.096,0.47,0.106c0.23,0.01,0.973,0.02,1.183-0.146s0.235-0.876,0.142-1.278 c-0.094-0.396-0.512-0.886-0.626-1.098c-0.116-0.208-0.732-1.754-0.868-2.006s-0.052-1.818,0.032-2.194 s0.626-2.246,0.814-2.624c0.189-0.376,0.439-2.111,0.439-2.111s0.178,0.042,0.208,0.084c0.032,0.042,0.094,0.054,0.094,0.054 s0.166,0.132,0.19,0.176c0.02,0.042,0.156,0.116,0.156,0.116s0.262,0.134,0.388,0.252c0.124,0.114,0.084,0.102,0.094,0.145 c0.01,0.041,0.042,0.168,0.062,0.281c0.02,0.118-0.011,0.064-0.021,0.18c-0.01,0.114,0,0.2,0,0.24s0.114,0.522,0.114,0.574 s-0.021,0.178-0.01,0.252c0.01,0.072,0.084,0.136,0.084,0.136s0.418,0.05,0.46,0.07c0.042,0.022,0.074,0.106,0.074,0.106 s0.062,0.123,0.062,0.25c0,0.126,0.01,0.094,0.01,0.094l0.188,0.336l0.042,0.082c0,0,0.208,0.021,0.26,0.034 c0.052,0.01,0.052,0.062,0.052,0.062s0.095,0.022,0.146,0.084c0.052,0.062,0.084,0.072,0.084,0.072s0.072,0.042,0.104,0.084 c0.032,0.042,0.137,0.062,0.137,0.062l0.042,0.05c0,0,0,0.084,0.01,0.126c0.012,0.042-0.03,0.115,0.042,0.334 c0.072,0.218,0.156,0.304,0.156,0.304s0.124,0.021,0.271,0.04c0.146,0.021,0.136,0.074,0.22,0.136 c0.084,0.062,0.124,0.042,0.124,0.042l0.022,0.062l0.146,0.031c0,0,0.146,0,0.221,0.009c0.071,0.012,0.104,0.036,0.166,0.042 c0.062,0.012,0.029,0.012,0.062,0.062c0.032,0.052,0.032,0.136,0.072,0.252c0.042,0.116,0.178,0.208,0.22,0.252 c0.042,0.042,0.084,0.032,0.178-0.062c0.095-0.096,0.116-0.21,0.126-0.262c0.009-0.055,0.021-0.211,0.009-0.336 C56.524,236.709,56.336,234.264,56.285,233.783z M45.192,209.222c0,0-0.14-1.254-0.14-1.59c0-0.332-0.056-0.836,0-1.03 c0.056-0.198,0.306-0.556,0.306-0.556s0.307,0.945,0.334,1.226c0.028,0.278,0.223,0.612,0.139,0.864 C45.749,208.386,45.192,209.222,45.192,209.222z M48.852,236.02c-0.032,0.408,0.01,0.72-0.094,0.92 c-0.104,0.2-0.23,0.312-0.292,0.262c0,0-0.124-0.731-0.166-1.014c-0.042-0.284,0.02-1.036,0.052-1.212 c0.032-0.178,0.188-0.786,0.263-0.71c0.071,0.074,0.136,0.366,0.155,0.574C48.791,235.048,48.884,235.611,48.852,236.02z",
				pathString2 = "M42.26,238.195l1.544,0.788l2.046,0.408c0,0,2.515,0.252,3.006,0.231c0.492-0.02,2.964-0.231,2.964-0.231 s2.624-0.126,3.223-0.478c0.598-0.356,1.048-1.188,1.048-1.188l0.43-0.554l-3.651-11.353l-10.534,3.3L42.26,238.195z";

		/* TODO rework paths so they start at origin, not +35x/+200y offset */
		return Pablo.g({class: 'icon-component'})
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

				.transform('scale', scale)
				.transform('translate', (x - 35) + ' ' + (y - 200))
});

Pablo.template('arrow', function(options){
	  var config = Pablo.extend({text: '', textColor: '#FFFFFF', height: 50, width: 113, x: 0, y: 0, fill: '#39B54A', background: '#FFFFFF', scale: 1}, options);
		var x = config.x,
				y = config.y,
				fill = config.fill,
				background = config.background,
				width = config.width,
				height = config.height,
				text = config.text,
				textColor = config.textColor,
				indent = 10,
				scale = config.scale,
				points = [0, height, indent, (height/2), 0, 0, width, 0, (width + indent), (height/2), width, height];

    return Pablo.g({class: 'icon-component'})
			.append(
				Pablo.polygon({
					points: points.join(','),
					fill: fill,
					stroke: background,
					'stroke-width': 3,
					'stroke-miterlimit': 10,
					'stroke-linejoin':'round',
					'stroke-linecap':'round',
					}).transform('scale', scale)
				.transform('translate', (x + 5) + ' ' + (y + 5)))
			.append(
				Pablo.text({x: (scale * x) + (width/5), y: (height/1.65) + 6, width: 80, height: 80, fill: textColor, class: 'icon-label'})
				.attr('style', 'font-size: ' + (.70 * scale) + 'em;')
				.content(text)
			)
});

Pablo.template('chevron', function(options){
	  var config = Pablo.extend({shape: 'default', x: 0, y: 0, height: 50, width: 13.5, fill: '#D0E8CA', background: '#FFFFFF', scale: 1}, options);
		if (config.shape == 'narrow'){
			config.width = 10.5;
		}
		var x = config.x,
				y = config.y,
				fill = config.fill,
				height = config.height,
	      width = config.width,
				indent = 10,
				background = config.background,
				scale = config.scale,
				points = [0, height, indent, (height/2), 0, 0, width, 0, (width + indent), (height/2), width, height];

		return Pablo.polygon({
			  class: 'icon-component',
				points: points.join(','),
				fill: fill,
				stroke: background,
				'stroke-width': 3,
				'stroke-miterlimit': 10,
				'stroke-linejoin':'round',
				'stroke-linecap':'round',
		}).transform('scale', scale)
			.transform('translate', (x + 5) + ' ' + (y + 5));
});

Pablo.template('fletch', function(options){
	  var config = Pablo.extend({height: 50, x: 0, y: 0, stroke: '#00AEEF', background: '#FFFFFF', scale: 1}, options);
		var x = config.x,
				y = config.y,
				height = config.height,
				indent = 10,
				stroke = config.stroke,
				background = config.background,
				scale = config.scale,
				points = [0, height, indent, (height/2), 0, 0];

    return Pablo.polyline({
			  class: 'icon-component',
				points: points.join(','),
				stroke: stroke,
				fill: 'none',
				'stroke-width': 3,
				'stroke-miterlimit': 10,
				'stroke-linejoin':'round',
				'stroke-linecap':'round',
		}).transform('scale', scale)
			.transform('translate', (x + 5) + ' ' + (y + 5));
});
