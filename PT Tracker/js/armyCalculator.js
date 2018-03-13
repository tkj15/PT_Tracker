	function armycalc() {
		
		// Gather data from user inputs & declare variables
		
		var armyGender = document.getElementById('armyGender').value;
		var armyAge = parseInt(document.getElementById('armyAge').value);
		var armyHeight = parseInt(document.getElementById('armyHeight').value);
		var armyWeight = parseInt(document.getElementById('armyWeight').value);
		var armyAbd = parseInt(document.getElementById('armyAbd').value);
		var armyPush = parseInt(document.getElementById('armyPush').value);
		var armySit = parseInt(document.getElementById('armySit').value);
		var run_time = (parseInt(document.getElementById('armyRun-min').value*60))+parseInt(document.getElementById('armyRun-sec').value);
		var walk_time = (parseInt(document.getElementById('armyWalk-min').value*60))+parseInt(document.getElementById('armyWalk-sec').value);
		
		var total_score = 0;
		var rating;
		var bmi = (armyWeight/(armyHeight*armyHeight))*703;
		var current_score = 0;	
				

		// Determine armyarmyGender
		if (armyGender=="Male") {
			
			
			// Determine armyAge
			if (armyAge<22) {
				
				// Run Time Score
				if (run_time<=780) {
					total_score += 100;
				} else if (run_time>780 && run_time<=786) {
					total_score += 99;
				} else if (run_time>786 && run_time<=792) {
					total_score += 97;
				} else if (run_time>792 && run_time<=798) {
					total_score += 96;
				} else if (run_time>798 && run_time<=804) {
					total_score += 94;
				} else if (run_time>804 && run_time<=810) {
					total_score += 93;
				} else if (run_time>810 && run_time<=816) {
					total_score += 92;
				} else if (run_time>816 && run_time<=822) {
					total_score += 90;
				} else if (run_time>822 && run_time<=828) {
					total_score += 89;
				} else if (run_time>828 && run_time<=834) {
					total_score += 88;
				} else if (run_time>834 && run_time<=840) {
					total_score += 86;
				} else if (run_time>840 && run_time<=846) {
					total_score += 85;
				} else if (run_time>846 && run_time<=852) {
					total_score += 83;
				} else if (run_time>852 && run_time<=858) {
					total_score += 82;
				} else if (run_time>858 && run_time<=864) {
					total_score += 81;
				} else if (run_time>864 && run_time<=870) {
					total_score += 79;
				} else if (run_time>870 && run_time<=876) {
					total_score += 78;
				} else if (run_time>876 && run_time<=882) {
					total_score += 77;
				} else if (run_time>882 && run_time<=888) {
					total_score += 75;
				} else if (run_time>888 && run_time<=894) {
					total_score += 74;
				} else if (run_time>894 && run_time<=900) {
					total_score += 72;
				} else if (run_time>900 && run_time<=906) {
					total_score += 71;
				} else if (run_time>906 && run_time<=912) {
					total_score += 70;
				} else if (run_time>912 && run_time<=918) {
					total_score += 68;
				} else if (run_time>918 && run_time<=924) {
					total_score += 67;
				} else if (run_time>924 && run_time<=930) {
					total_score += 66;
				} else if (run_time>930 && run_time<=936) {
					total_score += 64;
				} else if (run_time>936 && run_time<=942) {
					total_score += 63;
				} else if (run_time>942 && run_time<=948) {
					total_score += 61;
				} else if (run_time>948 && run_time<=954) {
					total_score += 60;
				} else {
					total_score += 0;
					rating = "Unsatisfactory";
				}
				document.getElementById("armyRun-score").innerHTML=total_score+" / 100";

				
				// // Walk Score
				if (walk_time==0) {
					var walk_score = "Not applicable";
				} else {
					if (walk_time<=976) {
						var walk_score = "Pass";
					} else {
						var walk_score = "Fail";
					}
				}
				document.getElementById("armyWalk-score").innerHTML=walk_score;
				
				
				current_score = total_score;
				// Push Up Score
				if (armyPush>=71) {
					total_score += 100;
				} else if (armyPush==70) {
					total_score += 99;
				} else if (armyPush==69) {
					total_score += 97;
				} else if (armyPush==68) {
					total_score += 96;
				} else if (armyPush==67) {
					total_score += 94;
				} else if (armyPush==66) {
					total_score += 93;
				} else if (armyPush==65) {
					total_score += 92;
				} else if (armyPush==64) {
					total_score += 90;
				} else if (armyPush==63) {
					total_score += 89;
				} else if (armyPush==62) {
					total_score += 88;
				} else if (armyPush==61) {
					total_score += 86; 
				} else if (armyPush==60) {
					total_score += 85;
				} else if (armyPush==59) {
					total_score += 83;
				} else if (armyPush==58) {
					total_score += 82;
				} else if (armyPush==57) {
					total_score += 81;
				} else if (armyPush==56) {
					total_score += 79;
				} else if (armyPush==55) {
					total_score += 78;
				} else if (armyPush==54) {
					total_score += 77;
				} else if (armyPush==53) {
					total_score += 75;
				} else if (armyPush==52) {
					total_score += 74;
				} else if (armyPush==51) {
					total_score += 72;
				} else if (armyPush==50) {
					total_score += 71;
				} else if (armyPush==49) {
					total_score += 70;
				} else if (armyPush==48) {
					total_score += 68;
				} else if (armyPush==47) {
					total_score += 67;
				} else if (armyPush==46) {
					total_score += 66;
				} else if (armyPush==45) {
					total_score += 64;
				} else if (armyPush==44) {
					total_score += 63;
				} else if (armyPush==43) {
					total_score += 61;
				} else if (armyPush==42) {
					total_score += 60;
				} else {
					total_score += 0;
					rating = "Unsatisfactory";
				}
				document.getElementById('armyPush-score').innerHTML=(total_score-current_score).toFixed(1)+" / 100";
				
				current_score = total_score;
				// Sit Ups Score
				if (armySit>=78) {
					total_score += 100;
				} else if (armySit==77) {
					total_score += 98;
				} else if (armySit==76) {
					total_score += 97;
				} else if (armySit==75) {
					total_score += 95;
				} else if (armySit==74) {
					total_score += 94;
				} else if (armySit==73) {
					total_score += 92;
				} else if (armySit==72) {
					total_score += 90;
				} else if (armySit==71) {
					total_score += 89;
				} else if (armySit==70) {
					total_score += 87;
				} else if (armySit==69) {
					total_score += 86;
				} else if (armySit==68) {
					total_score += 84;
				} else if (armySit==67) {
					total_score += 82;
				} else if (armySit==66) {
					total_score += 81;
				} else if (armySit==65) {
					total_score += 79;
				} else if (armySit==64) {
					total_score += 78;
				} else if (armySit==63) {
					total_score += 76;
				} else if (armySit==62) {
					total_score += 74;
				} else if (armySit==61) {
					total_score += 73;
				} else if (armySit==60) {
					total_score += 71;
				} else if (armySit==59) {
					total_score += 70;
				} else if (armySit==58) {
					total_score += 68;
				} else if (armySit==57) {
					total_score += 66;
				} else if (armySit==56) {
					total_score += 65;
				} else if (armySit==55) {
					total_score += 63;
				} else if (armySit==54) {
					total_score += 62;
				} else if (armySit==53) {
					total_score += 60;
				} else {
					total_score += 0;
					rating="Unsatisfactory";
				}
				document.getElementById('armySit-score').innerHTML=(total_score-current_score).toFixed(1)+" / 100";
				
				
								
				
			} else if (armyAge>21 && armyAge<=26) {
				
				// Run Time Score
					if (run_time<=780) {
					total_score += 100;
				} else if (run_time>780 && run_time<=786) {
					total_score += 99;
				} else if (run_time>786 && run_time<=792) {
					total_score += 98;
				} else if (run_time>792 && run_time<=798) {
					total_score += 97;
				} else if (run_time>798 && run_time<=804) {
					total_score += 96;
				} else if (run_time>804 && run_time<=810) {
					total_score += 94;
				} else if (run_time>810 && run_time<=816) {
					total_score += 93;
				} else if (run_time>816 && run_time<=822) {
					total_score += 92;
				} else if (run_time>822 && run_time<=828) {
					total_score += 91;
				} else if (run_time>828 && run_time<=834) {
					total_score += 90;
				} else if (run_time>834 && run_time<=840) {
					total_score += 89;
				} else if (run_time>840 && run_time<=846) {
					total_score += 88;
				} else if (run_time>846 && run_time<=852) {
					total_score += 87;
				} else if (run_time>852 && run_time<=858) {
					total_score += 86;
				} else if (run_time>858 && run_time<=864) {
					total_score += 84;
				} else if (run_time>864 && run_time<=870) {
					total_score += 83;
				} else if (run_time>870 && run_time<=876) {
					total_score += 82;
				} else if (run_time>876 && run_time<=882) {
					total_score += 81;
				} else if (run_time>882 && run_time<=888) {
					total_score += 80;
				} else if (run_time>888 && run_time<=894) {
					total_score += 79;
				} else if (run_time>894 && run_time<=900) {
					total_score += 78;
				} else if (run_time>900 && run_time<=906) {
					total_score += 77;
				} else if (run_time>906 && run_time<=912) {
					total_score += 76;
				} else if (run_time>912 && run_time<=918) {
					total_score += 74;
				} else if (run_time>918 && run_time<=924) {
					total_score += 73;
				} else if (run_time>924 && run_time<=930) {
					total_score += 72;
				} else if (run_time>930 && run_time<=936) {
					total_score += 71;
				} else if (run_time>936 && run_time<=942) {
					total_score += 70;
				} else if (run_time>942 && run_time<=948) {
					total_score += 69;
				} else if (run_time>948 && run_time<=954) {
					total_score += 68;
				} else if (run_time>954 && run_time<=960) {
					total_score += 67;
				} else if (run_time>960 && run_time<=966) {
					total_score += 66;
				} else if (run_time>966 && run_time<=972) {
					total_score += 64;
				} else if (run_time>972 && run_time<=978) {
					total_score += 63;
				} else if (run_time>978 && run_time<=984) {
					total_score += 62;
				} else if (run_time>984 && run_time<=990) {
					total_score += 61;
				} else if (run_time>990 && run_time<=996) {
					total_score += 60;
				} else {
					total_score += 0;
					rating = "Unsatisfactory";
				}
				document.getElementById("armyRun-score").innerHTML=total_score+" / 100";
				
				
				// // Walk Score
				if (walk_time==0) {
					var walk_score = "Not applicable";
				} else {
					if (walk_time<=978) {
						var walk_score = "Pass";
					} else {
						var walk_score = "Fail";
					}
				}
				document.getElementById("armyWalk-score").innerHTML=walk_score;
				
				
				current_score = total_score;
				// Push Up Score
				if (armyPush>=75) {
					total_score += 100;
				} else if (armyPush==74) {
					total_score += 99;
				} else if (armyPush==73) {
					total_score += 98;
				} else if (armyPush==72) {
					total_score += 97;
				} else if (armyPush==71) {
					total_score += 95;
				} else if (armyPush==70) {
					total_score += 94;
				} else if (armyPush==69) {
					total_score += 93;
				} else if (armyPush==68) {
					total_score += 92;
				} else if (armyPush==67) {
					total_score += 91;
				} else if (armyPush==66) {
					total_score += 90;
				} else if (armyPush==65) {
					total_score += 89;
				} else if (armyPush==64) {
					total_score += 87;
				} else if (armyPush==63) {
					total_score += 86;
				} else if (armyPush==62) {
					total_score += 85;
				} else if (armyPush==61) {
					total_score += 84; 
				} else if (armyPush==60) {
					total_score += 83;
				} else if (armyPush==59) {
					total_score += 82;
				} else if (armyPush==58) {
					total_score += 81;
				} else if (armyPush==57) {
					total_score += 79;
				} else if (armyPush==56) {
					total_score += 78;
				} else if (armyPush==55) {
					total_score += 77;
				} else if (armyPush==54) {
					total_score += 76;
				} else if (armyPush==53) {
					total_score += 75;
				} else if (armyPush==52) {
					total_score += 74;
				} else if (armyPush==51) {
					total_score += 73;
				} else if (armyPush==50) {
					total_score += 71;
				} else if (armyPush==49) {
					total_score += 70;
				} else if (armyPush==48) {
					total_score += 69;
				} else if (armyPush==47) {
					total_score += 68;
				} else if (armyPush==46) {
					total_score += 67;
				} else if (armyPush==45) {
					total_score += 66;
				} else if (armyPush==44) {
					total_score += 65;
				} else if (armyPush==43) {
					total_score += 63;
				} else if (armyPush==42) {
					total_score += 62;
				} else if (armyPush==41) {
					total_score += 61;
				} else if (armyPush==40) {
					total_score += 60;
				} else {
					total_score += 0;
					rating = "Unsatisfactory";
				}
				document.getElementById('armyPush-score').innerHTML=(total_score-current_score).toFixed(1)+" / 100";

				current_score = total_score;
				// Sit Ups Score
				if (armySit>=80) {
					total_score += 100;
				} else if (armySit==79) {
					total_score += 99;
				} else if (armySit==78) {
					total_score += 97;
				} else if (armySit==77) {
					total_score += 96;
				} else if (armySit==76) {
					total_score += 95;
				} else if (armySit==75) {
					total_score += 93;
				} else if (armySit==74) {
					total_score += 92;
				} else if (armySit==73) {
					total_score += 91;
				} else if (armySit==72) {
					total_score += 89;
				} else if (armySit==71) {
					total_score += 88;
				} else if (armySit==70) {
					total_score += 87;
				} else if (armySit==69) {
					total_score += 85;
				} else if (armySit==68) {
					total_score += 84;
				} else if (armySit==67) {
					total_score += 83;
				} else if (armySit==66) {
					total_score += 81;
				} else if (armySit==65) {
					total_score += 80;
				} else if (armySit==64) {
					total_score += 79;
				} else if (armySit==63) {
					total_score += 77;
				} else if (armySit==62) {
					total_score += 76;
				} else if (armySit==61) {
					total_score += 75;
				} else if (armySit==60) {
					total_score += 73;
				} else if (armySit==59)
					total_score += 72;
				} else if (armySit==58) {
					total_score += 71;
				} else if (armySit==57) {
					total_score += 69;
				} else if (armySit==56) {
					total_score += 68;
				} else if (armySit==55) {
					total_score += 67;
				} else if (armySit==54) {
					total_score += 65;
				} else if (armySit==53) {
					total_score += 64;
				} else if (armySit==52) {
					total_score += 63;
				} else if (armySit==51) {
					total_score += 61;
				} else if (armySit==50) {
					total_score += 60;
				} else {
					total_score += 0;
					rating="Unsatisfactory";
				}
				document.getElementById('armySit-score').innerHTML=(total_score-current_score).toFixed(1)+" / 10";
				
			} else if (armyAge>26 && armyAge<=31) {
				
				
				// Run Time Score
					if (run_time<=798) {
					total_score += 100;
				} else if (run_time>798 && run_time<=804) {
					total_score += 99;
				} else if (run_time>804 && run_time<=810) {
					total_score += 98;
				} else if (run_time>810 && run_time<=816) {
					total_score += 97;
				} else if (run_time>816 && run_time<=822) {
					total_score += 96;
				} else if (run_time>822 && run_time<=828) {
					total_score += 95;
				} else if (run_time>828 && run_time<=834) {
					total_score += 94;
				} else if (run_time>834 && run_time<=840) {
					total_score += 92;
				} else if (run_time>840 && run_time<=846) {
					total_score += 91;
				} else if (run_time>846 && run_time<=852) {
					total_score += 90;
				} else if (run_time>852 && run_time<=858) {
					total_score += 89;
				} else if (run_time>858 && run_time<=864) {
					total_score += 88;
				} else if (run_time>864 && run_time<=870) {
					total_score += 87;
				} else if (run_time>870 && run_time<=876) {
					total_score += 86;
				} else if (run_time>876 && run_time<=882) {
					total_score += 85;
				} else if (run_time>882 && run_time<=888) {
					total_score += 84;
				} else if (run_time>888 && run_time<=894) {
					total_score += 83;
				} else if (run_time>894 && run_time<=900) {
					total_score += 82;
				} else if (run_time>900 && run_time<=906) {
					total_score += 81;
				} else if (run_time>906 && run_time<=912) {
					total_score += 79;
				} else if (run_time>912 && run_time<=918) {
					total_score += 78;
				} else if (run_time>918 && run_time<=924) {
					total_score += 77;
				} else if (run_time>924 && run_time<=930) {
					total_score += 76;
				} else if (run_time>930 && run_time<=936) {
					total_score += 75;
				} else if (run_time>936 && run_time<=942) {
					total_score += 74;
				} else if (run_time>942 && run_time<=948) {
					total_score += 73;
				} else if (run_time>948 && run_time<=954) {
					total_score += 72;
				} else if (run_time>954 && run_time<=960) {
					total_score += 71;
				} else if (run_time>960 && run_time<=966) {
					total_score += 70;
				} else if (run_time>966 && run_time<=972) {
					total_score += 69;
				} else if (run_time>972 && run_time<=978) {
					total_score += 68;
				} else if (run_time>978 && run_time<=984) {
					total_score += 66;
				} else if (run_time>984 && run_time<=990) {
					total_score += 65;
				} else if (run_time>990 && run_time<=996) {
					total_score += 64;
				} else if (run_time>996 && run_time<=1002) {
					total_score += 63;
				} else if (run_time>1002 && run_time<=1008) {
					total_score += 62;
				} else if (run_time>1008 && run_time<=1014) {
					total_score += 61;
				} else if (run_time>1014 && run_time<=1020) {
					total_score += 60;
				} else {
					total_score += 0;
					rating = "Unsatisfactory";
				}
				document.getElementById("armyRun-score").innerHTML=total_score+" / 100";
				
				
				
				// // Walk Score
				if (walk_time==0) {
					var walk_score = "Not applicable";
				} else {
					if (walk_time<=983) {
						var walk_score = "Pass";
					} else {
						var walk_score = "Fail";
					}
				}
				document.getElementById("armyWalk-score").innerHTML=walk_score;
				
				current_score = total_score;
				// Push Up Score
				if (armyPush>=77) {
					total_score += 100;
				} else if (armyPush==76) {
					total_score += 99;
				} else if (armyPush==75) {
					total_score += 98;
				} else if (armyPush==74) {
					total_score += 97;
				} else if (armyPush==73) {
					total_score += 96;
				} else if (armyPush==72) {
					total_score += 95;
				} else if (armyPush==71) {
					total_score += 94;
				} else if (armyPush==70) {
					total_score += 93;
				} else if (armyPush==69) {
					total_score += 92;
				} else if (armyPush==68) {
					total_score += 91;
				} else if (armyPush==67) {
					total_score += 89;
				} else if (armyPush==66) {
					total_score += 88;
				} else if (armyPush==65) {
					total_score += 87;
				} else if (armyPush==64) {
					total_score += 86;
				} else if (armyPush==63) {
					total_score += 85; 
				} else if (armyPush==62) {
					total_score += 84;
				} else if (armyPush==61) {
					total_score += 83;
				} else if (armyPush==60) {
					total_score += 82;
				} else if (armyPush==59) {
					total_score += 81;
				} else if (armyPush==58) {
					total_score += 80;
				} else if (armyPush==57) {
					total_score += 79;
				} else if (armyPush==56) {
					total_score += 78;
				} else if (armyPush==55) {
					total_score += 77;
				} else if (armyPush==54) {
					total_score += 76;
				} else if (armyPush==53) {
					total_score += 75;
				} else if (armyPush==52) {
					total_score += 74;
				} else if (armyPush==51) {
					total_score += 73;
				} else if (armyPush==50) {
					total_score += 72;
				} else if (armyPush==49) {
					total_score += 71;
				} else if (armyPush==48) {
					total_score += 69;
				} else if (armyPush==47) {
					total_score += 68;
				} else if (armyPush==46) {
					total_score += 67;
				} else if (armyPush==45) {
					total_score += 66;
				} else if (armyPush==44) {
					total_score += 65;
				} else if (armyPush==43) {
					total_score += 64;
				} else if (armyPush==42) {
					total_score += 63;
				} else if (armyPush==41) {
					total_score += 62;
				} else if (armyPush==40) {
					total_score += 61;
				} else if (armyPush==39) {
					total_score += 60;
				} else {
					total_score += 0;
					rating = "Unsatisfactory";
				}
				document.getElementById('armyPush-score').innerHTML=(total_score-current_score).toFixed(1)+" / 100";
				
				
				current_score = total_score;
				// Sit Ups Score
				if (armySit>=82) {
					total_score += 100;
				} else if (armySit==81) {
					total_score += 99;
				} else if (armySit==80) {
					total_score += 98;
				} else if (armySit==79) {
					total_score += 97;
				} else if (armySit==78) {
					total_score += 96;
				} else if (armySit==77) {
					total_score += 95;
				} else if (armySit==76) {
					total_score += 94;
				} else if (armySit==75) {
					total_score += 92;
				} else if (armySit==74) {
					total_score += 91;
				} else if (armySit==73) {
					total_score += 90;
				} else if (armySit==72) {
					total_score += 89;
				} else if (armySit==71) {
					total_score += 88;
				} else if (armySit==70) {
					total_score += 87;
				} else if (armySit==69) {
					total_score += 86;
				} else if (armySit==68) {
					total_score += 85;
				} else if (armySit==67) {
					total_score += 84;
				} else if (armySit==66) {
					total_score += 83;
				} else if (armySit==65) {
					total_score += 82;
				} else if (armySit==64) {
					total_score += 81;
				} else if (armySit==63) {
					total_score += 79;
				} else if (armySit==62) {
					total_score += 78;
				} else if (armySit==61) {
					total_score += 77;
				} else if (armySit==60) {
					total_score += 76;
				} else if (armySit==59)
					total_score += 75;
				} else if (armySit==58) {
					total_score += 74;
				} else if (armySit==57) {
					total_score += 73;
				} else if (armySit==56) {
					total_score += 72;
				} else if (armySit==55) {
					total_score += 71;
				} else if (armySit==54) {
					total_score += 70;
				} else if (armySit==53) {
					total_score += 69;
				} else if (armySit==52) {
					total_score += 68;
				} else if (armySit==51) {
					total_score += 66;
				} else if (armySit==50) {
					total_score += 65;
				} else if (armySit==49) {
					total_score += 64;
				} else if (armySit==48) {
					total_score += 63;
				} else if (armySit==47) {
					total_score += 62;
				} else if (armySit==46) {
					total_score += 61;
				} else if (armySit==45) {
					total_score += 60;
				} else {
					total_score += 0;
					rating="Unsatisfactory";
				}
				document.getElementById('armySit-score').innerHTML=(total_score-current_score).toFixed(1)+" / 100";
				
			
		} else {
			
			
			// Determine armyAge
			if (armyAge<30) {
				
				// Run Time Score
				if (run_time<=623) {
					total_score += 60;
				} else if (run_time>623 && run_time<=651) {
					total_score += 59.9;
				} else if (run_time>651 && run_time<=666) {
					total_score += 59.5;
				} else if (run_time>666 && run_time<=682) {
					total_score += 59.2;
				} else if (run_time>682 && run_time<=698) {
					total_score += 58.9;
				} else if (run_time>698 && run_time<=716) {
					total_score += 58.6;
				} else if (run_time>716 && run_time<=734) {
					total_score += 58.1;
				} else if (run_time>734 && run_time<=754) {
					total_score += 57.6;
				} else if (run_time>754 && run_time<=773) {
					total_score += 57;
				} else if (run_time>773 && run_time<=794) {
					total_score += 56.2;
				} else if (run_time>794 && run_time<=816) {
					total_score += 55.3;
				} else if (run_time>816 && run_time<=840) {
					total_score += 54.2;
				} else if (run_time>840 && run_time<=865) {
					total_score += 52.8;
				} else if (run_time>865 && run_time<=892) {
					total_score += 51.2;
				} else if (run_time>892 && run_time<=920) {
					total_score += 49.3;
				} else if (run_time>920 && run_time<=950) {
					total_score += 46.9;
				} else if (run_time>950 && run_time<=982) {
					total_score += 44.1;
				} else {
					total_score += 0;
					rating = "Unsatisfactory";
				}
				document.getElementById("armyRun-score").innerHTML=total_score+" / 60";
				
				
				
				// Walk Score
				if (walk_time==0) {
					var walk_score = "Not applicable";
				} else {
					if (walk_time<=1042) {
						var walk_score = "Pass";
					} else {
						var walk_score = "Fail";
					}
				}
				document.getElementById("armyWalk-score").innerHTML=walk_score;
				
				current_score = total_score;
				// Push Ups Score
				if (armyPush>=47) {
					total_score += 10;
				} else if (armyPush>=42 && armyPush<47) {
					total_score += 9.5;
				} else if (armyPush==41) {
					total_score += 9.4;
				} else if (armyPush==40) {
					total_score += 9.3;
				} else if (armyPush==39) {
					total_score += 9.2;
				} else if (armyPush==38) {
					total_score += 9.1;
				} else if (armyPush==37) {
					total_score += 9;
				} else if (armyPush==36) {
					total_score += 8.9;
				} else if (armyPush==35) {
					total_score += 8.8;
				} else if (armyPush==34) {
					total_score += 8.6;
				} else if (armyPush==33) {
					total_score += 8.5;
				} else if (armyPush==32) {
					total_score += 8.4;
				} else if (armyPush==31) {
					total_score += 8.3;
				} else if (armyPush==30) {
					total_score += 8.2;
				} else if (armyPush==29) {
					total_score += 8.1;
				} else if (armyPush==28) {
					total_score += 8;
				} else if (armyPush==27) {
					total_score += 7.5;
				} else if (armyPush==26) {
					total_score += 7.3;
				} else if (armyPush==25) {
					total_score += 7.2;
				} else if (armyPush==24) {
					total_score += 7;
				} else if (armyPush==23) {
					total_score += 6.5;
				} else if (armyPush==22) {
					total_score += 6.3;
				} else if (armyPush==21) {
					total_score += 6;
				} else if (armyPush==20) {
					total_score += 5.8;
				} else if (armyPush==19) {
					total_score += 5.5;
				} else if (armyPush==18) {
					total_score += 5;
				} else {
					total_score += 0;
					rating = "Unsatisfactory";
				}
				document.getElementById('armyPush-score').innerHTML=(total_score-current_score).toFixed(1)+" / 10";
				
				current_score = total_score;
				// Sit Ups Score
				if (armySit>=54) {
					total_score += 10;
				} else if (armySit<54 && armySit>50) {
					total_score += 9.5;
				} else if (armySit==50) {
					total_score += 9.4;
				} else if (armySit==49) {
					total_score += 9;
				} else if (armySit==48) {
					total_score += 8.9;
				} else if (armySit==47) {
					total_score += 8.8;
				} else if (armySit==46) {
					total_score += 8.6;
				} else if (armySit==45) {
					total_score += 8.5;
				} else if (armySit==44) {
					total_score += 8;
				} else if (armySit==43) {
					total_score += 7.8;
				} else if (armySit==42) {
					total_score += 7.5;
				} else if (armySit==41) {
					total_score += 7;
				} else if (armySit==40) {
					total_score += 6.8;
				} else if (armySit==39) {
					total_score += 6.5;
				} else if (armySit==38) {
					total_score += 6;
				} else {
					total_score += 0;
					rating = "Unsatisfactory";
				}
				document.getElementById('armySit-score').innerHTML=(total_score-current_score).toFixed(1)+" / 10";
				
				
				
			} else if (armyAge>29 && armyAge<=39) {
				
				// Run Time Score
				if (run_time<=651) {
					total_score += 60;
				} else if (run_time>651 && run_time<=698) {
					total_score += 59.5;
				} else if (run_time>698 && run_time<=716) {
					total_score += 59;
				} else if (run_time>716 && run_time<=734) {
					total_score += 58.6;
				} else if (run_time>734 && run_time<=753) {
					total_score += 58.1;
				} else if (run_time>753 && run_time<=773) {
					total_score += 57.6;
				} else if (run_time>773 && run_time<=794) {
					total_score += 57;
				} else if (run_time>794 && run_time<=816) {
					total_score += 56.2;
				} else if (run_time>816 && run_time<=840) {
					total_score += 55.3;
				} else if (run_time>840 && run_time<=865) {
					total_score += 54.2;
				} else if (run_time>865 && run_time<=892) {
					total_score += 52.8;
				} else if (run_time>892 && run_time<=920) {
					total_score += 51.2;
				} else if (run_time>920 && run_time<=950) {
					total_score += 49.3;
				} else if (run_time>950 && run_time<=982) {
					total_score += 46.9;
				} else if (run_time>982 && run_time<=1017) {
					total_score += 40.8;
				}
				document.getElementById("armyRun-score").innerHTML=total_score+" / 60";
				
				
				
				// Walk Score
				if (walk_time==0) {
					var walk_score = "Not applicable";
				} else {
					if (walk_time<=1048) {
						var walk_score = "Pass";
					} else {
						var walk_score = "Fail";
					}
				}
				document.getElementById("armyWalk-score").innerHTML=walk_score;
				
				current_score = total_score;
				// Push Up Score
				if (armyPush>=46) {
					total_score += 10;
				} else if (armyPush<46 && armyPush>39) {
					total_score += 9.5;
				} else if (armyPush==39) {
					total_score += 9.4;
				} else if (armyPush==38) {
					total_score += 9.3;
				} else if (armyPush==37) {
					total_score += 9.3;
				} else if (armyPush==36) {
					total_score += 9.2;
				} else if (armyPush==35) {
					total_score += 9.1;
				} else if (armyPush==34) {
					total_score += 9.1;
				} else if (armyPush==33) {
					total_score += 9;
				} else if (armyPush==32) {
					total_score += 8.9;
				} else if (armyPush==31) {
					total_score += 8.9;
				} else if (armyPush==30) {
					total_score += 8.8;
				} else if (armyPush==29) {
					total_score += 8.7;
				} else if (armyPush==28) {
					total_score += 8.6;
				} else if (armyPush==27) {
					total_score += 8.6;
				} else if (armyPush==26) {
					total_score += 8.5;
				} else if (armyPush==25) {
					total_score += 8.3;
				} else if (armyPush==24) {
					total_score += 8.2;
				} else if (armyPush==23) {
					total_score += 8;
				} else if (armyPush==22) {
					total_score += 7.9;
				} else if (armyPush==21) {
					total_score += 7.8;
				} else if (armyPush==20) {
					total_score += 7.6;
				} else if (armyPush==19) {
					total_score += 7.5;
				} else if (armyPush==18) {
					total_score += 7;
				} else if (armyPush==17) {
					total_score += 6.8;
				} else if (armyPush==16) {
					total_score += 6.5;
				} else if (armyPush==15) {
					total_score += 6;
				} else if (armyPush==14) {
					total_score += 5;
				} else {
					total_score += 0;
					rating = "Unsatisfactory";
				}
				document.getElementById('armyPush-score').innerHTML=(total_score-current_score).toFixed(1)+" / 10";
				
				current_score = total_score;
				// Sit Ups Score
				if (armySit>=45) {
					total_score += 10;
				} else if (armySit<45 && armySit>41) {
					total_score += 9.5;
				} else if (armySit==41) {
					total_score += 9.4;
				} else if (armySit==40) {
					total_score += 9;
				} else if (armySit==39) {
					total_score += 8.8;
				} else if (armySit==38) {
					total_score += 8.5;
				} else if (armySit==37) {
					total_score += 8.3;
				} else if (armySit==36) {
					total_score += 8.2;
				} else if (armySit==35) {
					total_score += 8;
				} else if (armySit==34) {
					total_score += 7.8;
				} else if (armySit==33) {
					total_score += 7.5;
				} else if (armySit==32) {
					total_score += 7;
				} else if (armySit==31) {
					total_score += 6.8;
				} else if (armySit==30) {
					total_score += 6.5;
				} else if (armySit==29) {
					total_score += 6;
				} else {
					total_score += 0;
					rating = "Unsatisfactory";
				}
				document.getElementById('armySit-score').innerHTML=(total_score-current_score).toFixed(1)+" / 10";
				
				
				
			} else if (armyAge>39 && armyAge<=49) {
				
				// Run Time Score
				if (run_time<=682) {
					total_score += 60;
				} else if (run_time>682 && run_time<=716) {
					total_score += 59.9;
				} else if (run_time>716 && run_time<=734) {
					total_score += 59.8;
				} else if (run_time>734 && run_time<=753) {
					total_score += 59.6;
				} else if (run_time>753 && run_time<=773) {
					total_score += 59.4;
				} else if (run_time>773 && run_time<=794) {
					total_score += 59.1;
				} else if (run_time>794 && run_time<=816) {
					total_score += 58.7;
				} else if (run_time>816 && run_time<=840) {
					total_score += 58.2;
				} else if (run_time>840 && run_time<=865) {
					total_score += 57.7;
				} else if (run_time>865 && run_time<=892) {
					total_score += 56.9;
				} else if (run_time>892 && run_time<=920) {
					total_score += 56;
				} else if (run_time>920 && run_time<=950) {
					total_score += 54.8;
				} else if (run_time>950 && run_time<=982) {
					total_score += 53.3;
				} else if (run_time>982 && run_time<=1017) {
					total_score += 51.4;
				} else if (run_time>1017 && run_time<=1054) {
					total_score += 49;
				} else if (run_time>1054 && run_time<=1094) {
					total_score += 45.9;
				} else {
					total_score += 0;
					rating = "Unsatisfactory";
				}
				document.getElementById("armyRun-score").innerHTML=total_score+" / 60";
				
				
				// Walk Score
				if (walk_time==0) {
					var walk_score = "Not applicable";
				} else {
					if (walk_time<=1069) {
						var walk_score = "Pass";
					} else {
						var walk_score = "Fail";
					}
				}
				document.getElementById("armyWalk-score").innerHTML=walk_score;

				current_score = total_score;
				// Push Ups Score
				if (armyPush>=38) {
					total_score += 10;
				} else if (armyPush<38 && armyPush>32) {
					total_score += 9.5;
				} else if (armyPush==32) {
					total_score += 9.4;
				} else if (armyPush==31) {
					total_score += 9.2;
				} else if (armyPush==30) {
					total_score += 9.1;
				} else if (armyPush==29) {
					total_score += 9;
				} else if (armyPush==28) {
					total_score += 8.9;
				} else if (armyPush==27) {
					total_score += 8.8;
				} else if (armyPush==26) {
					total_score += 8.7;
				} else if (armyPush==25) {
					total_score += 8.6;
				} else if (armyPush==24) {
					total_score += 8.6;
				} else if (armyPush==23) {
					total_score += 8.5;
				} else if (armyPush==22) {
					total_score += 8.4;
				} else if (armyPush==21) {
					total_score += 8.3;
				} else if (armyPush==20) {
					total_score += 8.2;
				} else if (armyPush==19) {
					total_score += 8.1;
				} else if (armyPush==18) {
					total_score += 8;
				} else if (armyPush==17) {
					total_score += 7.8;
				} else if (armyPush==16) {
					total_score += 7.5;
				} else if (armyPush==15) {
					total_score += 7;
				} else if (armyPush==14) {
					total_score += 6.5
				} else if (armyPush==13) {
					total_score += 6;
				} else if (armyPush==12) {
					total_score += 5.5;
				} else if (armyPush==11) {
					total_score += 5;
				} else {
					total_score += 0;
					rating = "Unsatisfactory";
				}
				document.getElementById('armyPush-score').innerHTML=(total_score-current_score).toFixed(1)+" / 10";
				
				current_score = total_score;
				// Sit Ups Score
				if (armySit>=41) {
					total_score += 10;
				} else if (armySit<41 && armySit>37) {
					total_score += 9.5;
				} else if (armySit==37) {
					total_score += 9.4;
				} else if (armySit==36) {
					total_score += 9.2;
				} else if (armySit==35) {
					total_score += 9.1;
				} else if (armySit==34) {
					total_score += 9;
				} else if (armySit==33) {
					total_score += 8.8;
				} else if (armySit==32) {
					total_score += 8.5;
				} else if (armySit==31) {
					total_score += 8.3;
				} else if (armySit==30) {
					total_score += 8.2;
				} else if (armySit==29) {
					total_score += 8;
				} else if (armySit==28) {
					total_score += 7.5;
				} else if (armySit==27) {
					total_score += 7;
				} else if (armySit==26) {
					total_score += 6.8;
				} else if (armySit==25) {
					total_score += 6.4;
				} else if (armySit==24) {
					total_score += 6;
				} else {
					total_score += 0;
					rating = "Unsatisfactory";
				}
				document.getElementById('armySit-score').innerHTML=(total_score-current_score).toFixed(1)+" / 10";
				
				
				
			} else if (armyAge>49 && armyAge<=59) {
				
				// Run Time Score
				if (run_time<=773) {
					total_score += 60;
				} else if (run_time>773 && run_time<=816) {
					total_score += 59.8;
				} else if (run_time>816 && run_time<=840) {
					total_score += 59.6;
				} else if (run_time>840 && run_time<=865) {
					total_score += 59.3;
				} else if (run_time>865 && run_time<=892) {
					total_score += 58.9;
				} else if (run_time>892 && run_time<=920) {
					total_score += 58.4;
				} else if (run_time>920 && run_time<=950) {
					total_score += 57.7;
				} else if (run_time>950 && run_time<=982) {
					total_score += 56.8;
				} else if (run_time>982 && run_time<=1017) {
					total_score += 55.6;
				} else if (run_time>1017 && run_time<=1054) {
					total_score += 54;
				} else if (run_time>1054 && run_time<=1094) {
					total_score += 51.9;
				} else if (run_time>1094 && run_time<=1136) {
					total_score += 49.2;
				} else if (run_time>1136 && run_time<=1183) {
					total_score += 45.5;
				} else {
					total_score += 0;
					rating = "Unsatisfactory";
				}
				document.getElementById("armyRun-score").innerHTML=total_score+" / 60";
				
				
				// Walk Score
				if (walk_time==0) {
					var walk_score = "Not applicable";
				} else {
					if (walk_time<=1091) {
						var walk_score = "Pass";
					} else {
						var walk_score = "Fail";
					}
				}
				document.getElementById("armyWalk-score").innerHTML=walk_score;
				
				current_score = total_score;
				// Push Ups Score
				if (armyPush>=35) {
					total_score += 10;
				} else if (armyPush<35 && armyPush>29) {
					total_score += 9.5;
				} else if (armyPush==29) {
					total_score += 9.4;
				} else if (armyPush==28) {
					total_score += 9.3;
				} else if (armyPush==27) {
					total_score += 9.2;
				} else if (armyPush==26) {
					total_score += 9.1;
				} else if (armyPush==25) {
					total_score += 9;
				} else if (armyPush==24) {
					total_score += 8.8;
				} else if (armyPush==23) {
					total_score += 8.7;
				} else if (armyPush==22) {
					total_score += 8.6;
				} else if (armyPush==21) {
					total_score += 8.6;
				} else if (armyPush==20) {
					total_score += 8.5;
				} else if (armyPush==19) {
					total_score += 8.4;
				} else if (armyPush==18) {
					total_score += 8.3;
				} else if (armyPush==17) {
					total_score += 8.2;
				} else if (armyPush==16) {
					total_score += 8.1;
				} else if (armyPush==15) {
					total_score += 8;
				} else if (armyPush==14) {
					total_score += 7.5;
				} else if (armyPush==13) {
					total_score += 7;
				} else if (armyPush==12) {
					total_score += 6.5;
				} else if (armyPush==11) {
					total_score += 6;
				} else if (armyPush==10) {
					total_score += 5.5;
				} else if (armyPush==9) {
					total_score += 5;
				} else {
					total_score += 0;
					rating = "Unsatisfactory";
				}
				document.getElementById('armyPush-score').innerHTML=(total_score-current_score).toFixed(1)+" / 10";
				
				current_score = total_score;
				// Sit Ups Score
				if (armySit>=32) {
					total_score += 10;
				} else if (armySit==30 || armySit==31) {
					total_score += 9.5;
				} else if (armySit==29) {
					total_score += 9;
				} else if (armySit==28) {
					total_score += 8.9;
				} else if (armySit==27) {
					total_score += 8.8;
				} else if (armySit==26) {
					total_score += 8.6;
				} else if (armySit==25) {
					total_score += 8.5;
				} else if (armySit==24) {
					total_score += 8;
				} else if (armySit==23) {
					total_score += 7.5;
				} else if (armySit==22) {
					total_score += 7;
				} else if (armySit==21) {
					total_score += 6.5;
				} else if (armySit==20) {
					total_score += 6;
				} else {
					total_score += 0;
					rating = "Unsatisfactory";
				}
				document.getElementById('armySit-score').innerHTML=(total_score-current_score).toFixed(1)+" / 10";
				

				
			} else if (armyAge>59) {
				
				// Run Time Score
				if (run_time<=840) {
					total_score += 60;
				} else if (run_time>840 && run_time<=892) {
					total_score += 59.8;
				} else if (run_time>892 && run_time<=920) {
					total_score += 59.5;
				} else if (run_time>920 && run_time<=950) {
					total_score += 59.1;
				} else if (run_time>950 && run_time<=982) {
					total_score += 58.6;
				} else if (run_time>982 && run_time<=1017) {
					total_score += 57.9;
				} else if (run_time>1017 && run_time<=1054) {
					total_score += 57;
				} else if (run_time>1054 && run_time<=1094) {
					total_score += 55.8;
				} else if (run_time>1094 && run_time<=1136) {
					total_score += 54.2;
				} else if (run_time>1136 && run_time<=1183) {
					total_score += 52.1;
				} else if (run_time>1183 && run_time<=1233) {
					total_score += 49.3;
				} else if (run_time>1233 && run_time<=1288) {
					total_score += 45.6;
				} else if (run_time>1288 && run_time<=1348) {
					total_score += 40.8;
				} else {
					total_score += 0;
					rating = "Unsatisfactory";
				}
				document.getElementById("armyRun-score").innerHTML=total_score+" / 60";
				
				
				
				// Walk Score
				if (walk_time==0) {
					var walk_score = "Not applicable";
				} else {
					if (walk_time<=1133) {
						var walk_score = "Pass";
					} else {
						var walk_score = "Fail";
					}
				}
				document.getElementById("armyWalk-score").innerHTML=walk_score;
				
				current_score = total_score;
				// Push Ups Score
				if (armyPush>=21) {
					total_score += 10;
				} else if (armyPush==20 || armyPush==19) {
					total_score += 9.5;
				} else if (armyPush==18) {
					total_score += 9.4;
				} else if (armyPush==17) {
					total_score += 9;
				} else if (armyPush==16) {
					total_score += 8.8;
				} else if (armyPush==15) {
					total_score += 8.5;
				} else if (armyPush==14) {
					total_score += 8;
				} else if (armyPush==13) {
					total_score += 7.5;
				} else if (armyPush==12) {
					total_score += 7;
				} else if (armyPush==11) {
					total_score += 6.5;
				} else if (armyPush==10) {
					total_score += 6;
				} else if (armyPush==9) {
					total_score += 5.7;
				} else if (armyPush==8) {
					total_score += 5.3;
				} else if (armyPush==7) {
					total_score += 6;
				} else {
					total_score += 0;
					rating = "Unsatisfactory";
				}
				document.getElementById('armyPush-score').innerHTML=(total_score-current_score).toFixed(1)+" / 10";
				
				current_score = total_score;
				// Sit Ups Score
				if (armySit>=31) {
					total_score += 10;
				} else if (armySit==28 || armySit==29) {
					total_score += 9.5;
				} else if (armySit==27) {
					total_score += 9.4;
				} else if (armySit==26) {
					total_score += 9;
				} else if (armySit==25) {
					total_score += 8.9;
				} else if (armySit==24) {
					total_score += 8.8;
				} else if (armySit==23) {
					total_score += 8.7;
				} else if (armySit==22) {
					total_score += 8.6;
				} else if (armySit==21) {
					total_score += 8.5;
				} else if (armySit==20) {
					total_score += 8.4;
				} else if (armySit==19) {
					total_score += 8.3;
				} else if (armySit==18) {
					total_score += 8.2;
				} else if (armySit==17) {
					total_score += 8;
				} else if (armySit==16) {
					total_score += 7.8;
				} else if (armySit==15) {
					total_score += 7.5;
				} else if (armySit==14) {
					total_score += 7.3;
				} else if (armySit==13) {
					total_score += 7;
				} else if (armySit==12) {
					total_score += 6.5;
				} else if (armySit==11) {
					total_score += 6;
				} else {
					total_score += 0;
					rating = "Unsatisfactory";
				}
				document.getElementById('armySit-score').innerHTML=(total_score-current_score).toFixed(1)+" / 10";
				

				
			}
			
			
			// Adbominal Circumference
			if (armyAbd<=31.5) {
				total_score += 20;
			} else if (armyAbd==32) {
				total_score += 17.6;
			} else if (armyAbd==32.5) {
				total_score += 17.1;
			} else if (armyAbd==33) {
				total_score += 16.5;
			} else if (armyAbd==33.5) {
				total_score += 15.9;
			} else if (armyAbd==34) {
				total_score += 15.2;
			} else if (armyAbd==34.5) {
				total_score += 14.5;
			} else if (armyAbd==35) {
				total_score += 13.7;
			} else if (armyAbd==35.5) {
				total_score += 12.8;
			} else {
				total_score += 0;
				rating = "Unsatisfactory";
			}
			document.getElementById('armyAbd-score').innerHTML=(total_score-current_score).toFixed(1)+" / 20";
			
			
			
		}
		
		
		
		if (rating=="Unsatisfactory" && walk_score=="Fail") {

		} else if (rating=="Unsatisfactory" && walk_score=="Pass") {
			if (total_score>=36) {
				rating = "Excellent";
				document.getElementById('composite').innerHTML=total_score.toFixed(1)+" / 100";
				
			} else if (total_score>=30 && total_score<36) {
				rating = "Satisfactory";
				document.getElementById('composite').innerHTML=total_score.toFixed(1)+" / 100";
				
			} else {
				rating = "Unsatisfactory";
				document.getElementById('composite').innerHTML=total_score.toFixed(1)+" / 100";
				
			}
		} else {
			if (total_score>=90) {
				rating = "Excellent";
				document.getElementById('composite').innerHTML=total_score.toFixed(1)+" / 100";
				
			} else if (total_score>=75 && total_score<90) {
				rating = "Satisfactory";
				document.getElementById('composite').innerHTML=total_score.toFixed(1)+" / 100";
				
			} else {
				rating = "Unsatisfactory";
				document.getElementById('composite').innerHTML=total_score.toFixed(1)+" / 100";
				
			}
		}
		
		document.getElementById('bmi').innerHTML=bmi.toFixed(1);	
		document.getElementById('category').innerHTML=rating;

		
	}