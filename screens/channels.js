import data from '/data.js'
const  channelSection = {
    render: ()=>{
         const { channels } = data;
        return `
        <h1>the tech giants community channels</h1>
    
        <div class="channel-box">
        ${channels.map(
            (channels)=>`
            <div class="card" data-aos="fade-up">
          <div class="card-img" style="background-image: url('${channels.image}');"></div>
          <div class="card-text">
            <h2>${channels.name}</h2>
            <p>${channels.description}</p>
            <a href="#">Join now</a>
          </div>

          <div class="card-stats">
            <div class="stat">
              <div class="type">members</div>
              <div class="size">${channels.members}</div>
            </div>

            <div class="stat border">
              <div class="type">Admins</div>
              <div class="size">${channels.admins}</div>
            </div>

            <div class="stat">
              <div class="type">age</div>
              <div class="size">${channels.age}</div>
            </div>
          </div>
        </div>`
            
        ).join('\n')}

        `
    }
}

export default channelSection;