var fs = require('fs'),
    _ = require('underscore')
    mustache = require('mustache');

var slides = [
      { file: 'slides/intro.html', isTitleSlide: true },
      { file: 'slides/intro-project.html' },
      { file: 'slides/intro-agenda.html' }
    ],
    totalSlides = slides.length,
    slidesHtml = '';

var slideView = '\n \
<article id="slide-{{slideNumber}}" class="slide {{slideTitle}}">  \n \
  <div class="slide-number">{{slideNumber}} / {{totalSlides}}</div> \n \
  {{{slideContent}}} \n\
</article>';

_.each(slides, function(slide, i){
  console.log( ">>>>>>>>>>>" + slide.file );
  var slideContent,
      slideNumber = i + 1;

  slideContent = fs.readFileSync( __dirname + '/' + slide.file, {encoding:'utf8'} );
  slidesHtml += mustache.render(slideView, {slideContent:slideContent, slideNumber:slideNumber, totalSlides:totalSlides} );
});

var presentation = fs.readFileSync( __dirname + '/index.template.html', {encoding:'utf8'} );
var html = mustache.to_html(presentation, {slidesHTML:slidesHtml, tableOfContents: 'toc'} );
fs.writeFile('../index.html', html, {encoding:'utf8'}, function(err) {
  if (err) throw err;
  console.log('new index.html saved');
});
