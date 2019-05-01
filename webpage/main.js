var overallgpa, majorgpa, majorclasses = 0;


var overall = document.getElementById( 'overall' );
var major = document.getElementById( 'major' );

var inputs = document.getElementsByTagName( 'select' );


function calculate(){

    overallgpa = 0;
    majorgpa = 0;
    majorclasses = 0;

    for( var i = 0; i < inputs.length; i++ ){

        if( inputs[ i ].classList.contains( 'major' ) ){

            majorclasses++;
            majorgpa += parseInt( inputs[ i ].value );
        }
        overallgpa += parseInt( inputs[ i ].value );
    }

    overall.innerHTML = ( overallgpa / inputs.length ).toFixed( 2 );
    if( majorclasses > 0 ) major.innerHTML = ( majorgpa / majorclasses ).toFixed( 2 );
}