from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
import requests as req
import random, json
from .models import FormData
from datetime import datetime,timedelta
from .serializer import FormDataSerializer

@api_view(['POST'])
def get_images_with_query(request):
    query=request.data.get('query')
    print(query)
    no_of_images=20 # max value is 200
    API_KEY='46106111-0692140a2b57277894494a5aa'
    
    pixabay_url=f'https://pixabay.com/api/?key={API_KEY}&q={query}&image_type=photo&pretty=true&per_page={no_of_images}&safesearch=true'
    response=req.get(pixabay_url)
    # printable=json.dumps(response.json(),indent=5)
    
    if response.status_code==200:
        # print(len(response.json()['hits']))
        # print(printable)
        return Response(response.json())
    else:
        print(response.status_code)
        return Response({'error':'Failed to fetch image'},status=response.status_code)
    
    
@api_view(['GET'])
def get_images(request):
    keywords = [
    'nature', 'animals', 'flowers', 'landscape', 'technology', 'architecture', 'city', 
    'beach', 'mountains', 'food', 'travel', 'fashion', 'cars', 'people', 'sunset', 
    'ocean', 'sports', 'art', 'forest', 'festival', 'music', 'photography', 'wedding', 
    'baby', 'party', 'birds', 'space', 'autumn', 'sky', 'river', 'pets', 'abstract', 
    'winter', 'summer', 'spring', 'clouds', 'vintage', 'buildings', 'wildlife', 'flowers', 
    'technology', 'rain', 'night', 'water', 'desert', 'cityscape', 'nature', 'adventure',
    'urban', 'rural', 'culture', 'heritage', 'street', 'wild', 'sunrise', 'landmarks',
    'science', 'innovation', 'education', 'fitness', 'health', 'landmarks', 'futuristic',
    'robotics', 'meditation', 'space exploration', 'cosmos', 'jungle', 'savannah', 'moon',
    'planet', 'stars', 'camping', 'hiking', 'exploration', 'desert', 'underwater', 
    'coral reefs', 'tropical', 'medieval', 'futuristic', 'outer space', 'aviation', 
    'sustainable', 'eco-friendly', 'renewable', 'modern art', '3D', 'minimalism', 'gaming', 
    'cyberpunk', 'steampunk', 'retro', 'bohemian', 'interior design', 'coffee', 'fitness', 
    'yoga', 'cycling', 'skateboarding', 'snowboarding', 'surfing', 'roller skating', 
    'concert', 'festival', 'theater', 'performing arts', 'sculpture', 'graffiti', 'mosaic',
    'city lights', 'nightlife', 'fitness', 'wellness', 'self-care', 'mental health', 'beach',
    'urban jungle', 'rooftop', 'festival', 'zen', 'peaceful', 'tranquility', 'mindfulness',
    'abstract art', 'cubism', 'surrealism', 'pop art', 'scifi', 'futurism', 'neon', 
    'augmented reality', 'virtual reality', 'metaverse', 'blockchain', 'cryptocurrency',
    'work from home', 'remote work', 'co-working', 'freelancing', 'startup', 'entrepreneur',
    'digital nomad', 'robotics', 'AI', 'machine learning', 'cybersecurity', 'big data', 
    'automation', 'biotechnology', 'genetics', 'agriculture', 'food sustainability', 
    'climate change', 'green energy', 'electric vehicles', 'space travel', 'mars', 
    'exploration', 'spaceship', 'volcano', 'geology', 'polar', 'aurora', 'northern lights', 
    'holography', 'drone photography', 'astrophotography'
]

    
    query_keywords = random.sample(keywords, k=3)
    query = '+'.join(query_keywords)
    no_of_images=random.randint(15,100)
    
    API_KEY='46106111-0692140a2b57277894494a5aa'
    pixabay_url=f'https://pixabay.com/api/?key={API_KEY}&q={query}&image_type=photo&pretty=true&per_page={no_of_images}&safesearch=true'
    response=req.get(pixabay_url)
    
    if response.status_code==200:
        # print(len(response.json()['hits']))
        # print(printable)
        return Response(response.json())
    else:
        print(response.status_code)
        return Response({'error':'Failed to fetch image'},status=response.status_code)
    
    
@api_view(['POST'])
def store_form_data(request):
    try:
        fullname = request.data.get('name')
        number = request.data.get('number')
        email = request.data.get('email')
        address = request.data.get('address')
        date = request.data.get('date')
        days = request.data.get('days')
        occasion=request.data.get('occasion')

        # Create and save FormData object
        form_data = FormData(
            fullname=fullname,
            number=number,
            email=email,
            address=address,
            date=date,
            days=days,
            occasion=occasion
        )
        form_data.save()
        print("Im here")

        return Response({"message": "Data saved successfully!"}, status=status.HTTP_201_CREATED)
    except Exception as e:
        print(e)
        return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)
    
@api_view(['GET'])
def get_date(request):
    data=FormData.objects.all()
    serializer=FormDataSerializer(data,many=True)
    
    if len(serializer.data) == 0:
        return Response({
            'form_data': [],
            'list_of_dates': []
        })
    
    booked_dates = []
    
    for entry in serializer.data:
        start_date = entry['date']
        days = entry['days']
        
        start_date_obj = datetime.strptime(start_date, '%Y-%m-%d').date()
        
        booked_date_range = [(start_date_obj + timedelta(days=i)).isoformat() for i in range(days)]
        
        booked_dates.extend(booked_date_range)
    
    return Response({
        'form_data': serializer.data,
        'list_of_dates': booked_dates
    })
    
@api_view(['POST'])
def get_images_of_editors_choice(request):
    query=request.data.get('query')
    
    no_of_images=20 # max value is 200
    API_KEY='46106111-0692140a2b57277894494a5aa'
    
    pixabay_url=f'https://pixabay.com/api/?key={API_KEY}&q={query}&image_type=photo&pretty=true&per_page={no_of_images}&safesearch=true&editors_choice=true'
    response=req.get(pixabay_url)
    
    if response.status_code==200:
        return Response(response.json())
    else:
        print(response.status_code)
        return Response({'error':'Failed to fetch image'},status=response.status_code)
    
    
@api_view(['POST'])
def get_images_by_downloads(request):
    query=request.data.get('query')
    
    no_of_images=20 # max value is 200
    API_KEY='46106111-0692140a2b57277894494a5aa'
    
    pixabay_url=f'https://pixabay.com/api/?key={API_KEY}&q={query}&image_type=photo&pretty=true&per_page={no_of_images}&safesearch=true&editors_choice=true'
    response=req.get(pixabay_url)
    
    if response.status_code == 200:
        data = response.json()
        images = data['hits']
    
        sorted_images = sorted(images, key=lambda x: x['downloads'], reverse=True)
        print(json.dumps(sorted_images))
        return Response({'hits':json.dumps(sorted_images)})
    else:
        print(response.status_code)
        return Response({'error':'Failed to fetch image'},status=response.status_code)