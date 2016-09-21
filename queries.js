db.bios.find({awards: {$exists: true}});
db.bios.find({awards: {$exists: false}});
db.bios.find({contribs:{$in:['OOP', 'UNIX']}});
db.bios.find({'awards.award':'Turing Award'});
db.bios.find({_id: {$gt:2, $lt:8}});
db.bios.find({"awards.year": {$lt:2000}});
db.bios.find({birth: {$exists: true}, death: {$exists: false}});
