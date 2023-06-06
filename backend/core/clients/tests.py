# from . models import Client
# from rest_framework.test import APIClient
# from rest_framework.test import APITestCase
# from rest_framework import status



# class ClientTestCase(APITestCase):

#     """
#     Test suite for Client
#     """
#     def setUp(self):
#         self.client = APIClient()
#         self.data = {
#             "name": "Billy Smith",
#             "message": "This is a test message",
#             "email": "billysmith@test.com"
#         }
#         self.url = "/clients/"

#     def test_create_Client(self):
#         '''
#         test ClientViewSet create method
#         '''
#         data = self.data
#         response = self.client.post(self.url, data)
#         self.assertEqual(response.status_code, status.HTTP_200_OK)
#         self.assertEqual(Client.objects.count(), 1)
#         self.assertEqual(Client.objects.get().title, "Billy Smith")

#     def test_create_Client_without_name(self):
#         '''
#         test ClientViewSet create method when name is not in data
#         '''
#         data = self.data
#         data.pop("name")
#         response = self.client.post(self.url, data)
#         self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
    
#     def test_create_Client_when_name_equals_blank(self):
#         '''
#         test ClientViewSet create method when name is blank
#         '''
#         data = self.data
#         data["name"] = ""
#         response = self.client.post(self.url, data)
#         self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

#     def test_create_Client_without_message(self):
#         '''
#         test ClientViewSet create method when message is not in data
#         '''
#         data = self.data
#         data.pop("message")
#         response = self.client.post(self.url, data)
#         self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
    
#     def test_create_Client_when_message_equals_blank(self):
#         '''
#         test ClientViewSet create method when message is blank
#         '''
#         data = self.data
#         data["message"] = ""
#         response = self.client.post(self.url, data)
#         self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

#     def test_create_Client_without_email(self):
#         '''
#         test ClientViewSet create method when email is not in data
#         '''
#         data = self.data
#         data.pop("email")
#         response = self.client.post(self.url, data)
#         self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
    
#     def test_create_Client_when_email_equals_blank(self):
#         '''
#         test ClientViewSet create method when email is blank
#         '''
#         data = self.data
#         data["email"] = ""
#         response = self.client.post(self.url, data)
#         self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

#     def test_create_Client_when_email_equals_non_email(self):
#         '''
#         test ClientViewSet create method when email is not email
#         '''
#         data = self.data
#         data["email"] = "test"
#         response = self.client.post(self.url, data)
#         self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)