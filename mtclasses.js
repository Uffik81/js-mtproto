'use struct';

class MTObject {
	constructor(idPacket){
		this.idPacket = idpacket;
	}
	
}
// req_pq#60469778
class MTauthpq extends MTObject {
	constructor(key128){
		super(0x60469778);
		this.key128 = key128;
	}
	
}

