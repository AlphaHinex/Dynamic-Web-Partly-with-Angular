'use strict';

define(['apps/demo/form/grid/gridModule'], function(module) {

    module.controller('BasicGridCtrl', function($scope) {
        var gridData = [
    {
        '姓名': 'Ethel Price',
        '性别': 'female',
        '公司': 'Enersol'
    },
    {
        '姓名': 'Claudine Neal',
        '性别': 'female',
        '公司': 'Sealoud'
    },
    {
        '姓名': 'Beryl Rice',
        '性别': 'female',
        '公司': 'Velity'
    },
    {
        '姓名': 'Wilder Gonzales',
        '性别': 'male',
        '公司': 'Geekko'
    },
    {
        '姓名': 'Georgina Schultz',
        '性别': 'female',
        '公司': 'Suretech'
    },
    {
        '姓名': 'Carroll Buchanan',
        '性别': 'male',
        '公司': 'Ecosys'
    },
    {
        '姓名': 'Valarie Atkinson',
        '性别': 'female',
        '公司': 'Hopeli'
    },
    {
        '姓名': 'Schroeder Mathews',
        '性别': 'male',
        '公司': 'Polarium'
    },
    {
        '姓名': 'Lynda Mendoza',
        '性别': 'female',
        '公司': 'Dogspa'
    },
    {
        '姓名': 'Sarah Massey',
        '性别': 'female',
        '公司': 'Bisba'
    },
    {
        '姓名': 'Robles Boyle',
        '性别': 'male',
        '公司': 'Comtract'
    },
    {
        '姓名': 'Evans Hickman',
        '性别': 'male',
        '公司': 'Parleynet'
    },
    {
        '姓名': 'Dawson Barber',
        '性别': 'male',
        '公司': 'Dymi'
    },
    {
        '姓名': 'Bruce Strong',
        '性别': 'male',
        '公司': 'Xyqag'
    },
    {
        '姓名': 'Nellie Whitfield',
        '性别': 'female',
        '公司': 'Exospace'
    },
    {
        '姓名': 'Jackson Macias',
        '性别': 'male',
        '公司': 'Aquamate'
    },
    {
        '姓名': 'Pena Pena',
        '性别': 'male',
        '公司': 'Quarx'
    },
    {
        '姓名': 'Lelia Gates',
        '性别': 'female',
        '公司': 'Proxsoft'
    },
    {
        '姓名': 'Letitia Vasquez',
        '性别': 'female',
        '公司': 'Slumberia'
    },
    {
        '姓名': 'Trevino Moreno',
        '性别': 'male',
        '公司': 'Conjurica'
    },
    {
        '姓名': 'Barr Page',
        '性别': 'male',
        '公司': 'Apex'
    },
    {
        '姓名': 'Kirkland Merrill',
        '性别': 'male',
        '公司': 'Utara'
    },
    {
        '姓名': 'Blanche Conley',
        '性别': 'female',
        '公司': 'Imkan'
    },
    {
        '姓名': 'Atkins Dunlap',
        '性别': 'male',
        '公司': 'Comveyor'
    },
    {
        '姓名': 'Everett Foreman',
        '性别': 'male',
        '公司': 'Maineland'
    },
    {
        '姓名': 'Gould Randolph',
        '性别': 'male',
        '公司': 'Intergeek'
    },
    {
        '姓名': 'Kelli Leon',
        '性别': 'female',
        '公司': 'Verbus'
    },
    {
        '姓名': 'Freda Mason',
        '性别': 'female',
        '公司': 'Accidency'
    },
    {
        '姓名': 'Tucker Maxwell',
        '性别': 'male',
        '公司': 'Lumbrex'
    },
    {
        '姓名': 'Yvonne Parsons',
        '性别': 'female',
        '公司': 'Zolar'
    },
    {
        '姓名': 'Woods Key',
        '性别': 'male',
        '公司': 'Bedder'
    },
    {
        '姓名': 'Stephens Reilly',
        '性别': 'male',
        '公司': 'Acusage'
    },
    {
        '姓名': 'Mcfarland Sparks',
        '性别': 'male',
        '公司': 'Comvey'
    },
    {
        '姓名': 'Jocelyn Sawyer',
        '性别': 'female',
        '公司': 'Fortean'
    },
    {
        '姓名': 'Renee Barr',
        '性别': 'female',
        '公司': 'Kiggle'
    },
    {
        '姓名': 'Gaines Beck',
        '性别': 'male',
        '公司': 'Sequitur'
    },
    {
        '姓名': 'Luisa Farrell',
        '性别': 'female',
        '公司': 'Cinesanct'
    },
    {
        '姓名': 'Robyn Strickland',
        '性别': 'female',
        '公司': 'Obones'
    },
    {
        '姓名': 'Roseann Jarvis',
        '性别': 'female',
        '公司': 'Aquazure'
    },
    {
        '姓名': 'Johnston Park',
        '性别': 'male',
        '公司': 'Netur'
    },
    {
        '姓名': 'Wong Craft',
        '性别': 'male',
        '公司': 'Opticall'
    },
    {
        '姓名': 'Merritt Cole',
        '性别': 'male',
        '公司': 'Techtrix'
    },
    {
        '姓名': 'Dale Byrd',
        '性别': 'female',
        '公司': 'Kneedles'
    },
    {
        '姓名': 'Sara Delgado',
        '性别': 'female',
        '公司': 'Netagy'
    },
    {
        '姓名': 'Alisha Myers',
        '性别': 'female',
        '公司': 'Intradisk'
    },
    {
        '姓名': 'Felecia Smith',
        '性别': 'female',
        '公司': 'Futurity'
    },
    {
        '姓名': 'Neal Harvey',
        '性别': 'male',
        '公司': 'Pyramax'
    },
    {
        '姓名': 'Nola Miles',
        '性别': 'female',
        '公司': 'Sonique'
    },
    {
        '姓名': 'Herring Pierce',
        '性别': 'male',
        '公司': 'Geeketron'
    },
    {
        '姓名': 'Shelley Rodriquez',
        '性别': 'female',
        '公司': 'Bostonic'
    },
    {
        '姓名': 'Cora Chase',
        '性别': 'female',
        '公司': 'Isonus'
    },
    {
        '姓名': 'Mckay Santos',
        '性别': 'male',
        '公司': 'Amtas'
    },
    {
        '姓名': 'Hilda Crane',
        '性别': 'female',
        '公司': 'Jumpstack'
    },
    {
        '姓名': 'Jeanne Lindsay',
        '性别': 'female',
        '公司': 'Genesynk'
    },
    {
        '姓名': 'Frye Sharpe',
        '性别': 'male',
        '公司': 'Eplode'
    },
    {
        '姓名': 'Velma Fry',
        '性别': 'female',
        '公司': 'Ronelon'
    },
    {
        '姓名': 'Reyna Espinoza',
        '性别': 'female',
        '公司': 'Prismatic'
    },
    {
        '姓名': 'Spencer Sloan',
        '性别': 'male',
        '公司': 'Comverges'
    },
    {
        '姓名': 'Graham Marsh',
        '性别': 'male',
        '公司': 'Medifax'
    },
    {
        '姓名': 'Hale Boone',
        '性别': 'male',
        '公司': 'Digial'
    },
    {
        '姓名': 'Wiley Hubbard',
        '性别': 'male',
        '公司': 'Zensus'
    },
    {
        '姓名': 'Blackburn Drake',
        '性别': 'male',
        '公司': 'Frenex'
    },
    {
        '姓名': 'Franco Hunter',
        '性别': 'male',
        '公司': 'Rockabye'
    },
    {
        '姓名': 'Barnett Case',
        '性别': 'male',
        '公司': 'Norali'
    },
    {
        '姓名': 'Alexander Foley',
        '性别': 'male',
        '公司': 'Geekosis'
    },
    {
        '姓名': 'Lynette Stein',
        '性别': 'female',
        '公司': 'Macronaut'
    },
    {
        '姓名': 'Anthony Joyner',
        '性别': 'male',
        '公司': 'Senmei'
    },
    {
        '姓名': 'Garrett Brennan',
        '性别': 'male',
        '公司': 'Bluegrain'
    },
    {
        '姓名': 'Betsy Horton',
        '性别': 'female',
        '公司': 'Zilla'
    },
    {
        '姓名': 'Patton Small',
        '性别': 'male',
        '公司': 'Genmex'
    },
    {
        '姓名': 'Lakisha Huber',
        '性别': 'female',
        '公司': 'Insource'
    },
    {
        '姓名': 'Lindsay Avery',
        '性别': 'female',
        '公司': 'Unq'
    },
    {
        '姓名': 'Ayers Hood',
        '性别': 'male',
        '公司': 'Accuprint'
    },
    {
        '姓名': 'Torres Durham',
        '性别': 'male',
        '公司': 'Uplinx'
    },
    {
        '姓名': 'Vincent Hernandez',
        '性别': 'male',
        '公司': 'Talendula'
    },
    {
        '姓名': 'Baird Ryan',
        '性别': 'male',
        '公司': 'Aquasseur'
    },
    {
        '姓名': 'Georgia Mercer',
        '性别': 'female',
        '公司': 'Skyplex'
    },
    {
        '姓名': 'Francesca Elliott',
        '性别': 'female',
        '公司': 'Nspire'
    },
    {
        '姓名': 'Lyons Peters',
        '性别': 'male',
        '公司': 'Quinex'
    },
    {
        '姓名': 'Kristi Brewer',
        '性别': 'female',
        '公司': 'Oronoko'
    },
    {
        '姓名': 'Tonya Bray',
        '性别': 'female',
        '公司': 'Insuron'
    },
    {
        '姓名': 'Valenzuela Huff',
        '性别': 'male',
        '公司': 'Applideck'
    },
    {
        '姓名': 'Tiffany Anderson',
        '性别': 'female',
        '公司': 'Zanymax'
    },
    {
        '姓名': 'Jerri King',
        '性别': 'female',
        '公司': 'Eventex'
    },
    {
        '姓名': 'Rocha Meadows',
        '性别': 'male',
        '公司': 'Goko'
    },
    {
        '姓名': 'Marcy Green',
        '性别': 'female',
        '公司': 'Pharmex'
    },
    {
        '姓名': 'Kirk Cross',
        '性别': 'male',
        '公司': 'Portico'
    },
    {
        '姓名': 'Hattie Mullen',
        '性别': 'female',
        '公司': 'Zilencio'
    },
    {
        '姓名': 'Deann Bridges',
        '性别': 'female',
        '公司': 'Equitox'
    },
    {
        '姓名': 'Chaney Roach',
        '性别': 'male',
        '公司': 'Qualitern'
    },
    {
        '姓名': 'Consuelo Dickson',
        '性别': 'female',
        '公司': 'Poshome'
    },
    {
        '姓名': 'Billie Rowe',
        '性别': 'female',
        '公司': 'Cemention'
    },
    {
        '姓名': 'Bean Donovan',
        '性别': 'male',
        '公司': 'Mantro'
    },
    {
        '姓名': 'Lancaster Patel',
        '性别': 'male',
        '公司': 'Krog'
    },
    {
        '姓名': 'Rosa Dyer',
        '性别': 'female',
        '公司': 'Netility'
    },
    {
        '姓名': 'Christine Compton',
        '性别': 'female',
        '公司': 'Bleeko'
    },
    {
        '姓名': 'Milagros Finch',
        '性别': 'female',
        '公司': 'Handshake'
    },
    {
        '姓名': 'Ericka Alvarado',
        '性别': 'female',
        '公司': 'Lyrichord'
    },
    {
        '姓名': 'Sylvia Sosa',
        '性别': 'female',
        '公司': 'Circum'
    },
    {
        '姓名': 'Humphrey Curtis',
        '性别': 'male',
        '公司': 'Corepan'
    }
];

        $scope.gridOptions = {
            data: gridData,
            columnDefs: [
                {name: '姓名'},
                {name: '性别'},
                {name: '公司'}
            ]
        }

    });
        
});
