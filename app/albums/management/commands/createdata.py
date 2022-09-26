from django.core.management.base import BaseCommand
from faker import Faker

class Command(BaseCommand):
    help = "command information"


    def handle(self, *args, **kwargs):
        
        fake = Faker()


        #Publisher
        print(fake.company())
        print(fake.year())

        #Artist
        print(fake.first_name())
        print(fake.last_name())
        print(fake.date())

        #Album
        print(fake.bs())
        print(fake.ean(length=8))
        print(fake.date())
        print(fake.country())
        #Submission Date ????????????
        #Artist forign key
        #Album forign key


        #song
        print(fake.bs())
        print(fake.time())
        #Artist forign key
        #Album forign key



