var elem = document.getElementsByTagName('span');

for(var i = 0; i<elem.length; i++)
{
    elem[i].addEventListener('click' , function(){
        if(this.classList.contains('animation'))
        {
            this.classList.remove('animation');
        }
        else
        {
            this.classList.add('animation');
        }
    });
}