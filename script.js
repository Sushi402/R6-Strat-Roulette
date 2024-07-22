const attackerStrats = [
    "**Yellow Meta**: Only play operators with yellow operator icons.",
    "**The Wall**: Only play operators with shields (Fuze, Montagne, Blitz, etc).",
    "**Attention**: All attackers must walk in a straight line whenever possible, however, crouching and leaning are all independent of the player.",
    "**Longest Stick**: All attackers must appoint the player with the highest RP as 'King' and must obey their every command for the duration of the round after killing them at the beginning of the round.",
    "**Phone Phase**: Cannot use or move any drones.",
    "**Pants Ablaze**: Callouts given by teammates are possible lies or possible truths.",
    "**007**: The enemy defender with the highest score will become the target and all defenders will only be able to kill that defender until they have died, in which case the next highest score will become the new target.",
    "**Bombs Away**: One player selects Fuze while the rest play operators with grenades, all throwing their grenades into the site when the first Fuze is ignited.",
    "**Pay to Win**: Players can only select operators with the 'Black Ice' skin on their primary and secondary.",
    "**The Speed-Force**: All attackers can only play 3 speeds.",
    "**Skeet Shooting**: All players must play shotguns only.",
    "**Stevie Wonder**: When entering a room, you must close your eyes until you are through the doorway.",
    "**Blinding Lights**: One player selects Ying while the rest play operators with flash grenades, all throwing their flashes into the site when the first Ying is ignited.",
    "**Home Depot Representative**: A player must choose Sledge, smashing as many walls, doors, windows, and hatches as possible.",
    "**Roulette**: When the operator select menu appears, close your eyes and spam click until an operator is chosen at random.",
    "**Throw It Back**: When entering a room, you must enter backward until you are through the doorway.",
    "**Patted Backs**: When a player on the team gets a kill, the rest of the team must compliment them excessively.",
    "**Picture Day**: Take a screenshot of each kill you get and post it to the Discord channel for the duration of the round.",
    "**Freeze Tag**: Every player must stop moving for 3 seconds after a teammate gets a kill.",
    "**Seal Team Six**: Every player brings smokes and flashes to throw into and push site.",
    "**Knives Out**: All kills must be exclusively done by melees or knives.",
    "**Butler, PA**: The lowest score on the team is appointed as 'President' and must not die under any circumstances, if he does die, however, the rest of the team must surrender the round to the defenders."
];

const defenderStrats = [
    "**Blue Meta**: Only play operators with blue operator icons.",
    "**Press C**: All players must crouch for the entire round, no proning or standing.",
    "**10 Reinforcements**: No reinforcements can be placed.",
    "**Camera in Position**: Only play intel operators with cameras (Maestro, Mozzie, Valkyrie, Echo, Bulletproof, etc).",
    "**Clown Car**: All defenders will place themselves in a single room, all exiting at the same time when an attacker enters the site.",
    "**Testudo**: All players must choose a defender capable of creating cover (Azami walls, deployable shield, etc) and hide in a small spot surrounded by said cover.",
    "**In Headlights**: When you spot an enemy attacker, you cannot move.",
    "**A Quiet Place**: No words can be spoken in the duration of the round.",
    "**Delulu**: Reinforce the incorrect bomb site as if it were the real site.",
    "**Mannequins**: Once the prep phase ends select a spot to put yourself in for the entirety of the round, only moving after you’ve killed an opponent.",
    "**Counter-Strike**: All players are unable to aim down sights.",
    "**The Floor is Lava**: You can only shoot or kill from atop a surface off the floor like a table or countertop.",
    "**Death From Afar**: Open up as many lines of sight into the site as possible, all attackers moving to a place outside the site and shooting from a distance.",
    "**The Worm**: Once the prep phase ends, all defenders must remain prone for the entirety of the round.",
    "**Pricey T-Shirts**: One defender selects Rook with the defending team only allowed armor until after they’ve gotten a kill.",
    "**Karaoke**: The player with the least amount of points chooses a song, and the rest of the team sings along until the round ends.",
    "**Like a Record**: Before you shoot or kill an opponent, you must first spin 360 degrees.",
    "**Calm Down**: No cursing, taunting, or yelling for the duration of the round.",
    "**The Evilest Eye**: Place Maestro cameras on wooden floors with nitro cells underneath the floor of each camera, a player watching said cameras will notify which nitro cell must go off to kill an enemy attacker.",
    "**Birds of a Feather**: All defenders must stay near each other no matter what.",
    "**Watch Your Step**: All players must pick trap operators.",
    "**Trusty Sidearm**: All players must play pistols only."
];

document.getElementById('attackerBtn').addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * attackerStrats.length);
    document.getElementById('output').innerHTML = attackerStrats[randomIndex];
});

document.getElementById('defenderBtn').addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * defenderStrats.length);
    document.getElementById('output').innerHTML = defenderStrats[randomIndex];
});
