function drawBlueprint(selector, height, actors, components, touchpoints, description){
			var actorNames = actors;
			var serviceComponents = components;
			var touchpoints = touchpoints;
			var headerDescription = description;

			var lighterShadeOf = {"#39B54A": "#D0E8CA", "#00AEEF": "#B9E5FB"}
			var lightestShadeOf = {"#39B54A": "#EAF4E7", "#00AEEF": "#E1F4FD"}

			// golden ratio FTW
			var golden = ((1 + Math.sqrt(5)) / 2);
			var paperHeight = height;
			var paperWidth = paperHeight * golden;
			var paper =  Pablo(selector).root({width: paperWidth, height: paperHeight});

			var scale = (.00075 * paperWidth);
			console.log('scale: ' + scale);

			var headerSizeInRows = 1.5;
			var rowHeight = (paperHeight / (actorNames.length + headerSizeInRows));
			console.log('rowHeight: ' + rowHeight);

			var rowWidth = paperWidth;

			var timelineXOffset = rowHeight * 1.5;
			console.log('timelineXOffset: ' + timelineXOffset);

			var timelineYOffsetFactor = 5;
			var timelineYOffset = rowHeight / timelineYOffsetFactor;
			console.log('timelineYOffset: ' + timelineYOffset);

			// add a little space between elements
			var offset = (paperWidth * .0005);

			var rows = Pablo.g({class: 'rows'});
			rows.transform('translate', '0 ' + (rowHeight * headerSizeInRows));

			var header = Pablo.g({class: 'header', height: (rowHeight * headerSizeInRows), width: rowWidth})
				.append(Pablo.rect({x: 0, y: 0, width: rowWidth, height: rowHeight, fill: '#92278F', 'fill-opacity': .9}))
				.append(Pablo.rapidsms({x: 25, y: 10, scale: .55, rapidFill: '#FFFFFF', smsFill: '#FFFFFF'}))
				.append(Pablo.text({'font-family': 'SilkscreenExpanded', class: 'header-tagline', x: 20, y: (rowHeight / 2) + 20, width: rowWidth, height: rowHeight, fill: '#FFFFFF'})
					.attr('style', 'font-size: ' + (1 * scale) + 'em;')
					.content(headerDescription))
			header.appendTo(paper);


			// svg elements and icons for each actor
			for (var i=0, a=actorNames.length; i<a; i++){
					var row = Pablo.g({class: actorNames[i] + '-row row', width: paperWidth, height: rowHeight});
					var rowRect = Pablo.rect({class: 'rowRect', x: 0, y: 0, width: paperWidth, height: rowHeight, fill: 'none'})

					row.append(rowRect);

					var actor = Pablo.g({class: actorNames[i] + '-container container'})
					var icon = Pablo[actorNames[i]]({scale: scale, x: 5, y: 10})
						.appendTo(actor);
					var labelText = actorNames[i];
					if (actorNames[i] === 'phone'){
						labelText = 'services';
					}
					var actorLabel = Pablo.text({class: actorNames[i] + '-label actor-label', x: rowHeight, y: (rowHeight/2)})
						.attr('style', 'font-size: ' + (.9 * scale) + 'em;')
						.content(labelText)
						.transform('translate', (-25 * scale) + ' 0')
						.appendTo(actor);
					actor.appendTo(row);
					// grab fill color
					var color = icon.attr('fill');
					if (color === null){
					  // no fill color? probably a group of paths, so check the first child
					  color = icon[0].childNodes[0].getAttribute('fill');
					};
					actorLabel.attr('fill', color);

					if (i <= 1){
						// create timelines for mother and child rows
						var timeline = Pablo.g({class: actorNames[i] + '-timeline timeline'});
						timeline.attr({x: rowHeight, y: (rowHeight * i)});
						// prepend light chevrons to mother and child timelines
						Pablo.chevron({scale: scale, x: (-.02 * rowWidth), shape: 'narrow'})
							.attr('fill', lightestShadeOf[color])
							.appendTo(timeline);
						Pablo.chevron({scale: scale, x: (-.011 * rowWidth)})
							.attr('fill', lighterShadeOf[color])
							.appendTo(timeline);
						// keep track of previous element's right-most x position
						var previousX = 0;
						// make small elements big enough to hold labels
						var minWidth = (rowHeight / 2);
						for (var j=0, l=timelineData.length; j<l; j++){
							for (var key in timelineData[j]){
								if (timelineData[j][key][actorNames[i]] !== undefined){
									var milestone = timelineData[j][key][actorNames[i]];
									var x = (offset + previousX);
									var width = (key - previousX) > minWidth ? (key - previousX) : minWidth;
									Pablo.arrow({scale: scale, fill: color, x: x, width: width, text: milestone, textColor: '#000000'})
										.appendTo(timeline);
									previousX = parseInt(x + width);
								}
							}
						}
						// append light chevrons to mother and child timelines
						Pablo.chevron({scale: scale, x: (previousX + offset)})
							.attr('fill', lighterShadeOf[color])
							.appendTo(timeline);
						Pablo.chevron({scale: scale, x: (previousX + (13.5 * scale) + offset), shape: 'narrow'})
							.attr('fill', lightestShadeOf[color])
							.appendTo(timeline);
						timeline.transform('translate', timelineXOffset + ' ' + timelineYOffset);
						timeline.appendTo(row);
					}

					// add rows to paper BEFORE wordWrap calls
					row.appendTo(rows);
					rows.appendTo(paper);

					if (i <= 1){
						// wrap timeline labels for mother and child rows
						var labelSelector = selector + ' .' + actorNames[i] + '-timeline .icon-label';
						Pablo(labelSelector).each(function (d,i){
								wordWrap(d, i);
								// until elem.moveToFront() is available, do it manually
								// https://github.com/dharmafly/pablo/issues/10
								// d.remove() doesnt work in safari.. but
								// copying the remove source from pablo does.. WTF
								// However, Pablo(d).remove() does work in safari.
								// TODO is it better to wrap d with Pablo or just
								// use the vanilla js
								var parentNode = d.parentNode;
                if (parentNode){
                    parentNode.removeChild(d);
										timeline.append(d);
                }
								timeline.append(d);
						});
					} else {
						// add touchpoints to non-mother and non-child rows
						// TODO what if there are touchpoints for mother?
						for (var j=0, l=touchpoints.length; j<l; j++){
							for (var key in touchpoints[j]){
								if (touchpoints[j][key][actorNames[i]] !== undefined){
									var touchpoint = touchpoints[j][key][actorNames[i]];
									var x = (scale * key);
									var height = (rowHeight / 3.3333);
									var group = Pablo.g({id: 'touchpoint-' + (j + 1), class: actorNames[i] + '-touchpoint touchpoint'})
									if (touchpoints[j][key]['point-type'] !== undefined){
										if (touchpoints[j][key]['point-type'] === 'optional'){
											group.append(Pablo.rect({fill: color, x: x, y:height,  width: 9, height: 9}));
											Pablo.text({'font-family': 'Silkscreen', x: x, y: (height + 10), width: 20, height: 20})
												.attr('text-rendering', 'optimizeLegibility')
												.attr('style', 'font-size: ' + (.7 * scale) + 'em;')
												.attr('fill', '#888888')
												.attr('class', 'touchpoint-label touchpoint-label-optional')
												.content(touchpoint)
												.transform('rotate', '-25 ' + (x - 5) + ' ' + (height - 25))
												.appendTo(group);
										}
									} else {
										group.append(Pablo.circle({fill: color, cx: x, cy:height,  r: 5}));
										Pablo.text({'font-family': 'Silkscreen', x: x, y: (height + 10), width: 20, height: 20})
											.attr('text-rendering', 'optimizeLegibility')
											.attr('style', 'font-size: ' + (.7 * scale) + 'em;')
											.attr('fill', color)
											.attr('class', 'touchpoint-label')
											.content(touchpoint)
											.transform('rotate', '-25 ' + (x - 20) + ' ' + (height - 15))
											.appendTo(group);
									}
									group.transform('translate', timelineXOffset + ' ' + timelineYOffset);
									group.appendTo(row);
								}
							}
						}
						if (actorNames[i] === 'phone'){
							var maxComponents = 0;
							for (var m=0, n=serviceComponents.length; m<n; m++){
								maxComponents = Math.max(maxComponents, serviceComponents[m]['components'].length);
							}
							console.log(maxComponents);
							for (var m=0, n=serviceComponents.length; m<n; m++){
								var pointer = 0;
								for (var s=0, t=serviceComponents[m]['components'].length; s<t; s++){
									var x = (offset * scale * 12) + (serviceComponents[m]['start'] * scale) + pointer;
									var y = (((offset + 30) * scale) * (s + 1));
									var width = (scale * serviceComponents[m]['stop']) - x;
									var group = Pablo.g({class: 'service-component'});
									group.append(Pablo.rect({fill: color, 'fill-opacity': .25, x: x, y: y,  width: width, height: (scale * 25)}));
									var words = serviceComponents[m]['components'][s].split(' ');
									var label = Pablo.text({x: x, y: y, width: 20, height: 20})
											.attr('class', 'service-component-label');
									do {
										var word = words.pop();
										var wordX = x + ((offset + 2) * scale);
										var wordY = y + 8 + (words.length * (8 * scale));
										Pablo.tspan({'font-family': 'Silkscreen', x: wordX, y: wordY, class: 'service-component-label-tspan'})
											.attr('style', 'font-size: ' + (.7 * scale) + 'em;')
											.attr('fill', color)
											.content(word)
											.appendTo(label);
									} while (words.length);
									label.appendTo(group);
									group.transform('translate', timelineXOffset + ' ' + ((-(scale * offset * 30) * (maxComponents - 1))));
									group.appendTo(row);
								}
								pointer = (x + width);
							}
						}
					}
					row.transform('translate', '0 ' + (rowHeight * i));
			};

			var points = '';
			for (var j=0, l=touchpoints.length; j<l; j++){
				Pablo(selector + ' #touchpoint-' + (j+1)).each(function(d,i){
					// determine which row includes this touchpoint
					var thisRow;
					var actorName;
					if (d.hasOwnProperty('classList')){
						actorName = d.classList[0].split('-')[0];
					} else {
						actorName = d.className.baseVal.split(' ')[0].split('-')[0];
					}
					for (var k=0, m=actorNames.length; k<m; k++){
						if (actorNames[k] === actorName){
							thisRow = k;
							break;
						}
					}
					// find position of touchpoint, add offsets
					var thisX;
					var thisY;
					if (typeof(d.firstChild["cx"]) !== 'undefined'){
						thisX = timelineXOffset + (d.firstChild.getAttribute("cx") * 1);
					} else {
						// add 4.5 so line is centered on rect
						thisX = 4.5 + timelineXOffset + (d.firstChild.getAttribute("x") * 1);
					}
					if (typeof(d.firstChild["cy"]) !== 'undefined'){
						thisY = (rowHeight * thisRow) + timelineYOffset + (d.firstChild.getAttribute("cy") * 1);
					} else {
						// add 4.5 so line is centered on rect
						thisY = 4.5 + (rowHeight * thisRow) + timelineYOffset + (d.firstChild.getAttribute("y") * 1);
					}
					// add coordinates to string of points
					points += thisX + ',' + thisY + ' ';
			  })
			};

			// draw line connecting touchpoints in order
			Pablo.polyline({points: points, fill: 'none'})
				.attr('stroke', '#333')
				.attr('stroke-width', 3)
				.attr('stroke-miterlimit', 10)
				.attr('stroke-linejoin','round')
				.attr('stroke-linecap','round')
				.attr('stroke-opacity', 0.33)
			.appendTo(rows);


			function wordWrap(d, i){
				var textWidth = d.getBBox().width;
				var parentWidth = d.parentNode.getBBox().width;
				if ((parentWidth - minWidth) < textWidth){
					var words = d.textContent.split(' ');
					var longestWordLength = Math.max.apply(Math, words.map(function (el) { return el.length }));
					var line = new Array();
					var word;
					var x = d.getAttribute("x");
					var y = d.getAttribute("y");
					// clear element's textContent
					d.textContent = '';
					// adjust vertical position based on how many lines will be used
					Pablo(d).transform('translate', '0 ' + ((words.length - 1) * (6 * scale)));
					do {
						word = words.shift();
						line.push(word);
						var wordX = x;
						var wordY = y - (words.length * (10 * scale));
						// wrap each word in a tspan
						Pablo.tspan({'font-family': 'Silkscreen', x: wordX, y: wordY, class: 'icon-label-tspan'})
							.content(word)
							.appendTo(d);
					} while (words.length);
				}
			}
}
