import { db } from '../../utils/firebase';

export default async function handler(req, res) {
    const currentDate = new Date();
  const currentMonth = currentDate.getMonth() + 1;
  let today = "";
  if (currentMonth < 10) {
    today =
      currentDate.getFullYear() +
      "-0" +
      currentMonth +
      "-" +
      currentDate.getDate();
  } else {
    today =
      currentDate.getFullYear() +
      "-" +
      currentMonth +
      "-" +
      currentDate.getDate();
  }
    switch(req.method) {
        case 'GET': 
            const { city, category } = req.query
            let query = db.collection('posts').orderBy("date").where("date", ">=", today)

            if(city && city != "Välj stad") {
            query = query.where('city', '==', city)
            }

            if(category && city && city != "Välj stad") {
                let { category } = context.params;
                let imagePath = "";
                let imageAlt = "";
              
                if (category == "noje-uteliv") {
                  category = "Nöje & Uteliv";
                  imagePath = "/nojeutelivIcon.png";
                  imageAlt = "nojeutelivIcon";
                } else if (category == "sport-fritid") {
                  category = "Sport & Fritid";
                  imagePath = "/sportfritidIcon.png";
                  imageAlt = "sportfritidIcon";
                } else if (category == "mat-dryck") {
                  category = "Mat & Dryck";
                  imagePath = "/matdryckIcon.png";
                  imageAlt = "matdryckIcon";
                } else if (category == "kultur-livsstil") {
                  category = "Kultur & Livsstil";
                  imagePath = "/kulturlivsstilIcon.png";
                  imageAlt = "kulturlivsstilIcon";
                } else if (category == "hantverk-konst") {
                  category = "Hantverk & Konst";
                  imagePath = "/hantverkkonstIcon.png";
                  imageAlt = "hantverkkonstIcon";
                }
                query = query.where('city', '==', city).where('category', '==', category)
                }

            const snapshots = await query.get()
            const posts = snapshots.docs.map(doc => ({id:doc.id, ...doc.data()}))

            res.status(200).json(posts)
            
            break

        case 'POST':
            const body = req.body // {title: "", content: "", preview:""}

            const ref = await db.collection('posts').add(body)
            const doc = await ref.get()

            const post = { id: doc.id, ...doc.data() }

            res.status(201).json(post)
   
        break
        default:
            res.status(405).send('Method not allowd')
            break
    }
}