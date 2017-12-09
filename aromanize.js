/**
	Aromanize-js
	@author Fajar Chandra
	@since 2017.12.06
	
	UNICODE TABLE REFERENCES
	Hangul Jamo            0x3131 - 0x
	Hangul Choseong Jaeum  0x1100 - 
	Hangul Jungseong Moeum 0x1161 - 
	Hangul Jongseong Jaeum 0x11A8
	Hangul Eumjeol         0xAC00
 */
var Aromanize = {

	////////////////////////////////////////////////////////////////////
	// Transliteration rules
	////////////////////////////////////////////////////////////////////
	
	rules: {
		
		/**
		 * Revised Romanization Transcription
		 */
		'rr': {
			// Note: giyeok (0x1100) for middle moeum is different than giyeok (0x3131) for standalone jamo
			jaeum: {
				'ᄀ': 'g', 'ᄁ': 'kk',
				'ᄂ': 'n',
				'ᄃ': 'd', 'ᄄ': 'tt',
				'ᄅ': 'r', 
				'ᄆ': 'm',
				'ᄇ': 'b', 'ᄈ': 'pp',
				'ᄉ': 's', 'ᄊ': 'ss',
				'ᄋ': '',
				'ᄌ': 'j', 'ᄍ': 'jj',
				'ᄎ': 'ch', 
				'ᄏ': 'k', 
				'ᄐ': 't',
				'ᄑ': 'p',
				'ᄒ': 'h'
			},
			
			// Note: ᅡ (0x1161) for middle moeum is different than ㅏ (0x314F) for standalone jamo
			moeum: {
				'ᅡ': 'a', 'ᅢ': 'ae', 'ᅣ': 'ya', 'ᅤ': 'yae', 
				'ᅥ': 'eo', 'ᅦ': 'e', 'ᅧ': 'yeo', 'ᅨ': 'ye', 
				'ᅩ': 'o', 'ᅪ': 'wa', 'ᅫ': 'wae', 'ᅬ': 'oe', 'ᅭ': 'yo',
				'ᅮ': 'u', 'ᅯ': 'wo', 'ᅰ': 'we', 'ᅱ': 'wi', 'ᅲ': 'yu', 
				'ᅳ': 'eu', 'ᅴ': 'eui', 'ᅵ': 'i'
			},
			
			// Note: ᆨ (0x11A8) for last jaeum (batchim) is different than ᄀ (0x1100) for first jaeum
			// also different than ㄱ (0x3131) for standalone jamo
			batchim: {
				'ᆨ': 'k', 'ᆨᄋ': 'g', 'ᆨᄂ': 'ngn', 'ᆨᄅ': 'ngn', 'ᆨᄆ': 'ngm', 'ᆨᄒ': 'kh',
				'ᆩ': 'kk', 'ᆩᄋ': 'kg', 'ᆩᄂ': 'ngn', 'ᆩᄅ': 'ngn', 'ᆩᄆ': 'ngm', 'ᆩᄒ': 'kh',
				'ᆪ': 'k', 'ᆪᄋ': 'ks', 'ᆪᄂ': 'ngn', 'ᆪᄅ': 'ngn', 'ᆪᄆ': 'ngm', 'ᆪᄒ': 'kch', 
				'ᆫ': 'n', 'ᆫᄅ': 'll', 
				'ᆬ': 'n', 'ᆬᄋ': 'nj', 'ᆬᄂ': 'nn', 'ᆬᄅ': 'nn', 'ᆬᄆ': 'nm', 'ᆬㅎ': 'nch',
				'ᆭ': 'n', 'ᆭᄋ': 'nh', 'ᆭᄅ': 'nn', 
				'ᆮ': 't', 'ᆮᄋ': 'd', 'ᆮᄂ': 'nn', 'ᆮᄅ': 'nn', 'ᆮᄆ': 'nm', 'ᆮᄒ': 'th', 
				'ᆯ': 'l', 'ᆯᄋ': 'r', 'ᆯᄂ': 'll', 
				'ᆰ': 'k', 'ᆰᄋ': 'lg', 'ᆰᄂ': 'ngn', 'ᆰᄅ': 'ngn', 'ᆰᄆ': 'ngm', 'ᆰᄒ': 'lkh',
				'ᆱ': 'm', 'ᆱᄋ': 'lm', 'ᆱᄂ': 'mn', 'ᆱᄅ': 'mn', 'ᆱᄆ': 'mm', 'ᆱᄒ': 'lmh', 
				'ᆲ': 'p', 'ᆲᄋ': 'lb', 'ᆲᄂ': 'mn', 'ᆲᄅ': 'mn', 'ᆲᄆ': 'mm', 'ᆲᄒ': 'lph', 
				'ᆳ': 't', 'ᆳᄋ': 'ls', 'ᆳᄂ': 'nn', 'ᆳᄅ': 'nn', 'ᆳᄆ': 'nm', 'ᆳᄒ': 'lsh', 
				'ᆴ': 't', 'ᆴᄋ': 'lt', 'ᆴᄂ': 'nn', 'ᆴᄅ': 'nn', 'ᆴᄆ': 'nm', 'ᆴᄒ': 'lth', 
				'ᆵ': 'p', 'ᆵᄋ': 'lp', 'ᆵᄂ': 'mn', 'ᆵᄅ': 'mn', 'ᆵᄆ': 'mm', 'ᆵᄒ': 'lph', 
				'ᆶ': 'l', 'ᆶᄋ': 'lh', 'ᆶᄂ': 'll', 'ᆶᄅ': 'll', 'ᆶᄆ': 'lm', 'ᆶᄒ': 'lh',
				'ᆷ': 'm', 'ᆷᄅ': 'mn', 
				'ᆸ': 'p', 'ᆸᄋ': 'b', 'ᆸᄂ': 'mn', 'ᆸᄅ': 'mn', 'ᆸᄆ': 'mm', 'ᆸᄒ': 'ph', 
				'ᆹ': 'p', 'ᆹᄋ': 'ps', 'ᆹᄂ': 'mn', 'ᆹᄅ': 'mn', 'ᆹᄆ': 'mm', 'ᆹᄒ': 'psh', 
				'ᆺ': 't', 'ᆺᄋ': 's', 'ᆺᄂ': 'nn', 'ᆺᄅ': 'nn', 'ᆺᄆ': 'nm', 'ᆺᄒ': 'sh', 
				'ᆻ': 't', 'ᆻᄋ': 'ss', 'ᆻᄂ': 'tn', 'ᆻᄅ': 'tn', 'ᆻᄆ': 'nm', 'ᆻᄒ': 'th', 
				'ᆼ': 'ng',
				'ᆽ': 't', 'ᆽᄋ': 'j', 'ᆽᄂ': 'nn', 'ᆽᄅ': 'nn', 'ᆽᄆ': 'nm', 'ᆽᄒ': 'ch', 
				'ᆾ': 't', 'ᆾᄋ': 'ch', 'ᆾᄂ': 'nn', 'ᆾᄅ': 'nn', 'ᆾᄆ': 'nm', 'ᆾᄒ': 'ch', 
				'ᆿ': 'k', 'ᆿᄋ': 'k', 'ᆿᄂ': 'ngn', 'ᆿᄅ': 'ngn', 'ᆿᄆ': 'ngm', 'ᆿᄒ': 'kh', 
				'ᇀ': 't', 'ᇀᄋ': 't', 'ᇀᄂ': 'nn', 'ᇀᄅ': 'nn', 'ᇀᄆ': 'nm', 'ᇀᄒ': 'th', 
				'ᇁ': 'p', 'ᇁᄋ': 'p', 'ᇁᄂ': 'mn', 'ᇁᄅ': 'mn', 'ᇁᄆ': 'mm', 'ᇁᄒ': 'ph', 
				'ᇂ': 't', 'ᇂᄋ': 'h', 'ᇂᄂ': 'nn', 'ᇂᄅ': 'nn', 'ᇂᄆ': 'mm', 'ᇂᄒ': 't'
			}
		},
		
		/**
		 * Revised Romanization Transliteration
		 */
		'rr-translit': {
			// Note: giyeok (0x1100) for middle moeum is different than giyeok (0x3131) for standalone jamo
			jaeum: {
				'ᄀ': 'g', 'ᄁ': 'kk',
				'ᄂ': 'n',
				'ᄃ': 'd', 'ᄄ': 'tt',
				'ᄅ': 'l', 
				'ᄆ': 'm',
				'ᄇ': 'b', 'ᄈ': 'pp',
				'ᄉ': 's', 'ᄊ': 'ss',
				'ᄋ': '',
				'ᄌ': 'j', 'ᄍ': 'jj',
				'ᄎ': 'ch', 
				'ᄏ': 'k', 
				'ᄐ': 't',
				'ᄑ': 'p',
				'ᄒ': 'h'
			},		
			
			// Note: ᅡ (0x1161) for middle moeum is different than ㅏ (0x314F) for standalone jamo
			moeum: {
				'ᅡ': 'a', 'ᅢ': 'ae', 'ᅣ': 'ya', 'ᅤ': 'yae', 
				'ᅥ': 'eo', 'ᅦ': 'e', 'ᅧ': 'yeo', 'ᅨ': 'ye', 
				'ᅩ': 'o', 'ᅪ': 'oa', 'ᅫ': 'oae', 'ᅬ': 'oi', 'ᅭ': 'yo',
				'ᅮ': 'u', 'ᅯ': 'ueo', 'ᅰ': 'ue', 'ᅱ': 'ui', 'ᅲ': 'yu', 
				'ᅳ': 'eu', 'ᅴ': 'eui', 'ᅵ': 'i'
			},
			
			// Note: ᆨ (0x11A8) for last jaeum (batchim) is different than ᄀ (0x1100) for first jaeum
			// also different than ㄱ (0x3131) for standalone jamo
			batchim: {
				'ᆨ': 'g', 'ᆨᄋ': 'g-',
				'ᆩ': 'kk', 'ᆩᄋ': 'kk-',
				'ᆪ': 'gs', 'ᆪᄋ': 'gs-', 'ᆪᄉ': 'gs-s', 
				'ᆫ': 'n', 'ᆫᄋ': 'n-', 
				'ᆬ': 'nj', 'ᆬᄋ': 'nj-', 'ᆬᄌ': 'nj-j', 
				'ᆭ': 'nh', 'ᆭᄋ': 'nh-',
				'ᆮ': 'd', 'ᆮᄋ': 'd-',
				'ᆯ': 'l', 'ᆯᄋ': 'l-',
				'ᆰ': 'lg', 'ᆰᄋ': 'lg-', 
				'ᆱ': 'lm', 'ᆱᄋ': 'lm-', 
				'ᆲ': 'lb', 'ᆲᄋ': 'lb-', 
				'ᆳ': 'ls', 'ᆳᄋ': 'ls-', 'ᆳᄉ': 'ls-s', 
				'ᆴ': 'lt', 'ᆴᄋ': 'lt-', 
				'ᆵ': 'lp', 'ᆵᄋ': 'lp-', 
				'ᆶ': 'lh', 'ᆶᄋ': 'lh-', 
				'ᆷ': 'm', 'ᆷᄋ': 'm-', 
				'ᆸ': 'b', 'ᆸᄋ': 'b-', 
				'ᆹ': 'bs', 'ᆹᄋ': 'bs-', 'ᆹᄉ': 'bs-s', 
				'ᆺ': 's', 'ᆺᄋ': 's-', 'ᆺᄊ': 's-ss', 
				'ᆻ': 'ss', 'ᆻᄋ': 'ss-', 'ᆻᄉ': 'ss-s', 
				'ᆼ': 'ng', 'ᆼᄋ': 'ng-',
				'ᆽ': 'j', 'ᆽᄋ': 'j-', 'ᆽᄌ': 'j-j', 
				'ᆾ': 'ch', 'ᆾᄋ': 'ch-', 
				'ᆿ': 'k', 'ᆿᄋ': 'k-', 
				'ᇀ': 't', 'ᇀᄋ': 't-', 
				'ᇁ': 'p', 'ᇁᄋ': 'p-', 
				'ᇂ': 'h', 'ᇂᄋ': 'h-'
			}
		}
	},
	
	////////////////////////////////////////////////////////////////////
	// Conversion methods
	////////////////////////////////////////////////////////////////////

	/**
	 * Converts Hangul to Romaja
	 * 
	 * Options/Parameters:
	 * text      - (String) Source string.
	 * rule      - (String) Romanization rule.
	 *             Possible values: rr|rr-translit
	 * hyphen    - (String) Hyphenate syllables with specified characters.
	 * 
	 * Return:
	 * (String) Romanized string.
	 */
	hangulToLatin: function() { // (text, rule, hyphen)
		// Options mapping
		var args = {};
		if(typeof arguments[0] == 'object') {
			args = arguments[0];
		}
		else {
			args.text = arguments[0];
			args.rule = arguments[1];
			args.hyphen = arguments[2];
		}
		
		var rulemap = this.rules.rr;
		switch(args.rule) {
			case undefined:
			case null:
				break;
			case 'rr':
			case 'rr-translit':
				rulemap = this.rules[args.rule];
				break;
			default:
				throw 'Invalid rule ' + args.rule;
		}
		
		var rom = '';
		var curr = null, next;
		var skipJaeum = false; // Indicates jaeum of current iteration to be skipped
		for(var i = 0; i <= args.text.length; i++) {
			// If next is hangul syllable, separate it into jamo
			// 0xAC00 is the first hangul syllable in unicode table
			// 0x1100 is the first hangul jaeum in unicode table
			// 0x1161 is the first hangul moeum in unicode table
			// 0x11A8 is the first hangul batchim in unicode table
			nextIdx = args.text.charCodeAt(i) - 0xAC00;
			if(!isNaN(nextIdx) && nextIdx >= 0 && nextIdx <= 11171) {
				next = String.fromCharCode(Math.floor(nextIdx / 588) + 0x1100)
					+ String.fromCharCode(Math.floor(nextIdx % 588 / 28) + 0x1161)
					+ (nextIdx % 28 == 0 ? '' : String.fromCharCode(nextIdx % 28 + 0x11A7)); // Index 0 is reserved for nothing
			}
			else {
				next = args.text.charAt(i);
			}
			
			// Except for first iteration (curr is null), 
			// Curr and next contains 2 or 3 jamo, or 1 non-hangul letter
			if(curr != null) {
				// Jaeum
				if(!skipJaeum) {
					if(rulemap.jaeum[curr.charAt(0)] != undefined) {
						rom += rulemap.jaeum[curr.charAt(0)];
					}
					else {
						rom += curr.charAt(0);
					}
				}
				skipJaeum = false;
				
				// Moeum
				if(curr.length > 1) {
					if(rulemap.moeum[curr.charAt(1)] != undefined) {
						rom += rulemap.moeum[curr.charAt(1)];
					}
					else {
						rom += curr.charAt(1);
					}
				}
				
				// Batchim
				if(curr.length > 2) {
					// Changing sound
					if(rulemap.batchim[curr.charAt(2) + next.charAt(0)] != undefined) {
						rom += rulemap.batchim[curr.charAt(2) + next.charAt(0)];
						skipJaeum = true;
					}
					// Unchanging sound
					else if(rulemap.batchim[curr.charAt(2)] != undefined) {
						rom += rulemap.batchim[curr.charAt(2)];
					}
					else {
						rom += curr.charAt(1);
					}
				}
			}
			
			curr = next;
		}
		return rom;
	},
	
	////////////////////////////////////////////////////////////////////
	// All-in-one converters
	////////////////////////////////////////////////////////////////////

	/**
	 * Converts Hangul/Hiragana/Katakana to Romaja
	 * 
	 * Conversion is done using default conversion rule for each script.
	 * If you wish to specify which rule to use, use hangulToLatin(), 
	 * hiraganaToLatin(), or katakanaToLatin() function.
	 * 
	 * Options/Parameters:
	 * text      - (String) Source text.
	 * filter    - (String|number|boolean) Only transliterate specified scripts.
	 *             See hasFilter() for list of possible values.
	 * hyphen    - (String) Hyphenate syllables with specified characters.
	 * 
	 * Return:
	 * (String) Romanized string.
	 */
	toLatin: function() { // (text, filter, hyphen)
		return this.hangulToLatin.apply(this, arguments);
	},

	/**
	 * Converts Hangul/Hiragana/Katakana to Romaja
	 * 
	 * This is an alias of toRomaja().
	 */
	romanize: function() { 
		return this.toLatin.apply(this, arguments); 
	},

	/**
	 * Converts Romaji/Hangul/Katakana to Hiragana
	 */
	toHiragana: function(text) {
		//TODO
		return text;
	},

	/**
	 * Converts Romaji/Hangul/Hiragana to Katakana
	 */
	toKatakana: function(text) {
		//TODO
		return text;
	},

	/**
	 * Converts Romaji/Hiragana/Katakana to Hangul
	 */
	toHangul: function(text) {
		//TODO
		return text;
	},

};

////////////////////////////////////////////////////////////////////
// String extensions
////////////////////////////////////////////////////////////////////

if((typeof AROMANIZE_EXTEND_STRING == 'undefined' || AROMANIZE_EXTEND_STRING) &&
   (typeof document == 'undefined' || /\?(.+&)?base(=true)?(&.+)?$/.test(document.currentScript.src) == false)
  ) {
		
	// romanize()
	if(typeof String.prototype.romanize == 'undefined') {
		String.prototype.romanize = function() {
			var args = Array.prototype.slice.call(arguments);
			args.unshift(this.toString());
			return Aromanize.toLatin.apply(Aromanize, args);
		};
	}

}

////////////////////////////////////////////////////////////////////////////////
// Export Node.js module
////////////////////////////////////////////////////////////////////////////////

if(typeof module != 'undefined') {
	module.exports = Aromanize;
}

////////////////////////////////////////////////////////////////////////////////
// Command line interface
////////////////////////////////////////////////////////////////////////////////

if(typeof process != 'undefined' && require.main == module) {
	
	// Capture options
	var script = Aromanize.toLatin;
	var options = {};
	for(var i = 2; i < process.argv.length; i++) {
		// Script
		switch(process.argv[i]) {
			case '-r':
			case '--romanize':
			case '-l':
			case '--latin':
				script = Aromanize.toLatin;
				break;
				
			case '-h':
			case '--hangul':
				script = Aromanize.toHangul;
				break;
				
			case '-i':
			case '--hiragana':
				script = Aromanize.toHiragana;
				break;
				
			case '-k':
			case '--katakana':
				script = Aromanize.toKatakana;
				break;
		}
		
		// Options
		if(process.argv[i][0] == '-') {
			var opt = process.argv[i].split('=');
			switch(opt[0]) {
				default:
					if(opt[0].length > 2) {
						options[opt[0].substr(2)] = opt[1];
					}
			}
		}
		
		// Input
		else {
			options['text'] = process.argv[i];
		}
	}
	
	// If no input provided or --help is triggered, show help
	if(options['text'] == null || options['--help'] != undefined) {
		console.log('\n\
Usage:\n\
  aromanize [TARGET] [OPTIONS] <input>\n\
\n\
Example:\n\
  aromanize -r "안녕하세요?"\n\
\n\
TARGET:\n\
  -r, --romanize,   \n\
  -l, --latin       Converts to Latin script (Romaja).\n\
\n\
OPTIONS:\n\
      --rule=RULE   Use specified transliteration rule.\n\
      --help        Display this help message.\n\
      \n\
RULE:\n\
  rr                Revised Romanization Transcription (default)\n\
  rr-translit       Revised Romanization Transliteration\n\
		');
		process.exit(0);
	}
	
	// Execute script
	console.log(options);
	console.log(script.call(Aromanize, options));
}
