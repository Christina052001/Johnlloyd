function showSection(sectionId) {
    const targetSection = document.getElementById(sectionId);
    
    // If the section exists and is not already visible
    if (targetSection && !targetSection.classList.contains('active')) {
        targetSection.classList.add('active'); // Make the section visible
    }
}

{
    const newList = [];

    $('#getData').on('click', function(){
      console.log('I am working');
      var catchThemAll = $.ajax({
        method: 'GET',
        url: 'https://pokeapi.co/api/v2/pokemon/',
      }).done(function(data){
        console.log(data.results);
        let list = "";

        data.results.map((item, key) => {
          list += '<li>' + item.name + '<button onclick="getDetails(' + key + ')">Show full details</button></li>';
          newList.push(item);
        }); 
        $('#myList').html(list); 
      });
    });

    function getDetails(id){
      console.log(newList[id]);

      $.ajax({
        method: 'GET',
        url: newList[id].url
      }).done(function (data){
        console.log(data);


        let ability = data.abilities.map(ability => ability.ability.name);
        let abilitiesHTML = '<p>Skills: ' + ability.join(', ') + '</p>';
        $('#abilities').html(abilitiesHTML);

        let baseExp = data.base_experience;
        let baseExpHTML = '<p>Base Experience: ' + baseExp + '</p>';
        $('#base_experience').html(baseExpHTML);

        let hero = newList[id].name; 
        let heroHtml = '<p>Hero: ' + hero + '</p>';
        heroHtml += '<button onclick="catchPokemon(' + id + ')">Catch Pokemon</button>';
        $('#Hero').html(heroHtml); 
      
  
      });
    }

    function catchPokemon(id){
      document.getElementById('label').innerHTML = 'You unlocked ' + newList[id].name + '!';
    }
}