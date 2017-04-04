/**
 * Created by maitri on 3/16/2017.
 */
jQuery(document).ready(function($){
    var i = 1;
    var icon_names = {'icon1':'game.html', 'icon2':'book.html', 'icon3':'calender.html', 'icon4':'news.html',
                'icon5':'calculator.html', 'icon6':'settings.html', 'icon7':'video.html', 'icon8':'tools.html'};
    for(i; i < 9; i++){
        $("#icon"+i).click(function(e){
         window.open(icon_names[e.target.id]);
        });
    }
});